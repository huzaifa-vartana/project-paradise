import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

// GraphQL Response Types
interface ContributionsCollection {
  totalCommitContributions: number;
  totalRepositoryContributions: number;
  totalPullRequestContributions: number;
  totalIssueContributions: number;
}

interface StarredRepositories {
  totalCount: number;
}

interface GitHubUser {
  contributionsCollection: ContributionsCollection;
  starredRepositories: StarredRepositories;
}

interface GitHubStatsResponse {
  user: GitHubUser;
}

interface GraphQLContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: GraphQLContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface ContributionsData {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    };
  };
}

interface CommitHistory {
  totalCount: number;
  nodes: Array<{
    contributionCount: number;
    repository: {
      name: string;
    };
    date: string;
  }>;
}

interface CommitHistoryResponse {
  user: {
    contributionsCollection: {
      commitContributionsByRepository: Array<{
        repository: {
          name: string;
        };
        contributions: CommitHistory;
      }>;
    };
  };
}

export interface GitHubStats {
  totalCommits: number;
  repos: number;
  stars: number;
  contributions: number;
}

export interface CommitData {
  date: string;
  count: number;
  repo: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  intensity: number;
}

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const [user, repos] = await Promise.all([
      octokit.users.getByUsername({ username }),
      octokit.repos.listForUser({ username }),
    ]);

    // Get contribution count and starred repos using GraphQL
    const response = await octokit.graphql<GitHubStatsResponse>(
      `query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            totalCommitContributions
            totalRepositoryContributions
            totalPullRequestContributions
            totalIssueContributions
          }
          starredRepositories {
            totalCount
          }
        }
      }`,
      { username }
    );

    if (!response?.user) {
      throw new Error("Failed to fetch user data from GitHub");
    }

    const totalContributions = response.user.contributionsCollection.totalCommitContributions +
      response.user.contributionsCollection.totalRepositoryContributions +
      response.user.contributionsCollection.totalPullRequestContributions +
      response.user.contributionsCollection.totalIssueContributions;

    return {
      totalCommits: response.user.contributionsCollection.totalCommitContributions,
      repos: user.data.public_repos,
      stars: response.user.starredRepositories.totalCount,
      contributions: totalContributions,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return {
      totalCommits: 0,
      repos: 0,
      stars: 0,
      contributions: 0,
    };
  }
}

export async function getRecentCommits(username: string): Promise<CommitData[]> {
  try {
    // Get user's repositories first
    const { data: repos } = await octokit.repos.listForUser({
      username,
      per_page: 100,
      sort: 'pushed',
      direction: 'desc'
    });

    // Get commits from each repository
    const recentRepos = repos.slice(0, 5); // Only check the 5 most recently pushed repos for performance
    const commitsPromises = recentRepos.map(async (repo) => {
      try {
        const { data: commits } = await octokit.repos.listCommits({
          owner: repo.owner.login,
          repo: repo.name,
          author: username,
          per_page: 100,
          since: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // Last 14 days
        });
        return commits.map(commit => ({
          date: commit.commit.author?.date?.split('T')[0] || '',
          count: 1,
          repo: repo.name
        }));
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}:`, error);
        return [];
      }
    });

    const allCommitsArrays = await Promise.all(commitsPromises);
    const allCommits = allCommitsArrays
      .flat()
      .filter(commit => commit.date) // Filter out commits without dates
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Group commits by date and repository
    const groupedCommits = allCommits.reduce((acc, commit) => {
      const key = `${commit.date}-${commit.repo}`;
      if (!acc[key]) {
        acc[key] = { ...commit, count: 0 };
      }
      acc[key].count++;
      return acc;
    }, {} as Record<string, CommitData>);

    return Object.values(groupedCommits);
  } catch (error) {
    console.error("Error fetching recent commits:", error);
    return [];
  }
}

export async function getContributionData(username: string): Promise<ContributionDay[]> {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 364);

    const response = await octokit.graphql<ContributionsData>(
      `query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }`,
      {
        username,
        from: startDate.toISOString(),
        to: endDate.toISOString(),
      }
    );

    if (!response?.user?.contributionsCollection?.contributionCalendar?.weeks) {
      console.error("Invalid contribution data structure:", response);
      return [];
    }

    const days = response.user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: ContributionWeek) => week.contributionDays)
      .map((day: GraphQLContributionDay): ContributionDay => ({
        date: day.date,
        count: day.contributionCount,
        intensity: Math.min(4, Math.floor(day.contributionCount / 5)),
      }));

    return days;
  } catch (error) {
    console.error("Error fetching contribution data:", error);
    return [];
  }
} 