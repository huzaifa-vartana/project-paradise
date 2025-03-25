import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

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
    const [user, repos, contributions] = await Promise.all([
      octokit.users.getByUsername({ username }),
      octokit.repos.listForUser({ username }),
      octokit.repos.getContributionsStats({ owner: username, repo: username }),
    ]);

    return {
      totalCommits: contributions.data.total || 0,
      repos: user.data.public_repos,
      stars: user.data.starred_repos || 0,
      contributions: user.data.contributions || 0,
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
    const { data: events } = await octokit.activity.listPublicEventsForUser({
      username,
      per_page: 100,
    });

    const commits = events
      .filter((event) => event.type === "PushEvent")
      .map((event) => ({
        date: event.created_at.split("T")[0],
        count: event.payload.commits?.length || 0,
        repo: event.repo.name,
      }))
      .slice(0, 14); // Get last 14 days

    return commits;
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

    const { data: contributions } = await octokit.graphql(
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

    const days = contributions.user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: any) => week.contributionDays)
      .map((day: any) => ({
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