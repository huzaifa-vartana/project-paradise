import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { getContributionData, getGitHubStats, getRecentCommits, type CommitData, type ContributionDay } from "@/lib/github";
import { Calendar, Code, GitBranch, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";

export const GitHubActivity = () => {
  const [stats, setStats] = useState({
    totalCommits: 0,
    repos: 0,
    stars: 0,
    contributions: 0,
  });
  const [recentCommits, setRecentCommits] = useState<CommitData[]>([]);
  const [commitData, setCommitData] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Check if GitHub token is available
        if (!import.meta.env.VITE_GITHUB_TOKEN) {
          throw new Error("GitHub token is not configured. Please check your .env file.");
        }

        const username = "huzaifa-vartana"; // Replace with your GitHub username
        console.log("Fetching GitHub data for username:", username);
        
        const [statsData, commitsData, contributionData] = await Promise.all([
          getGitHubStats(username),
          getRecentCommits(username),
          getContributionData(username),
        ]);
        
        console.log("GitHub data fetched successfully:", {
          stats: statsData,
          commits: commitsData,
          contributions: contributionData
        });
        
        setStats(statsData);
        setRecentCommits(commitsData);
        setCommitData(contributionData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch GitHub data";
        console.error("Error fetching GitHub data:", err);
        setError(`Error: ${errorMessage}. Please check your GitHub token and username.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getIntensityClass = (intensity: number) => {
    switch(intensity) {
      case 0: return "bg-gray-100 dark:bg-gray-800";
      case 1: return "bg-green-200 dark:bg-green-900";
      case 2: return "bg-green-300 dark:bg-green-700";
      case 3: return "bg-green-400 dark:bg-green-600";
      case 4: return "bg-green-500 dark:bg-green-500";
      default: return "bg-gray-100 dark:bg-gray-800";
    }
  };

  // Group days by week
  const groupedByWeek: ContributionDay[][] = [];
  for (let i = 0; i < commitData.length; i += 7) {
    groupedByWeek.push(commitData.slice(i, i + 7));
  }

  if (error) {
    return (
      <section id="github-activity" className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading 
            title="GitHub Activity" 
            subtitle="A snapshot of my coding journey and contributions"
            alignment="center"
          />
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-activity" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading 
          title="GitHub Activity" 
          subtitle="A snapshot of my coding journey and contributions"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="card-hover bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 border-none shadow-md">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <Code className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{isLoading ? "..." : stats.totalCommits.toLocaleString()}</h3>
                <p className="text-muted-foreground">Total Commits</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 border-none shadow-md">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <GitBranch className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{isLoading ? "..." : stats.repos}</h3>
                <p className="text-muted-foreground">Repositories</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 border-none shadow-md">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <Star className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{isLoading ? "..." : stats.stars}</h3>
                <p className="text-muted-foreground">Stars Received</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="relative rounded-xl p-6 md:p-8 bg-white/70 dark:bg-gray-900/70 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0,var(--tw-gradient-to)_100%)] from-blue-50/80 to-transparent dark:from-blue-900/20 rounded-xl"></div>
          
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center">
              <Calendar className="mr-2" size={20} />
              Contribution History
            </h3>
            <Button variant="outline" size="sm" className="gap-2 rounded-full" asChild>
              <a href="https://github.com/huzaifa-vartana" target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                View on GitHub
              </a>
            </Button>
          </div>
          
          <div className="overflow-auto pb-4">
            <div className="grid grid-flow-col gap-1 auto-cols-min min-w-[900px]">
              {isLoading ? (
                <div className="col-span-full text-center py-8">Loading contribution data...</div>
              ) : (
                groupedByWeek.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-flow-row gap-1">
                    {week.map((day, dayIndex) => (
                      <div 
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm ${getIntensityClass(day.intensity)} transition-colors hover:ring-2 ring-gray-300 dark:ring-gray-600`}
                        title={`${day.date}: ${day.count} commits`}
                      />
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Code className="mr-2" size={20} />
            Recent Contributions
          </h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {isLoading ? (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="card-hover h-full bg-white dark:bg-gray-900 border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="animate-pulse">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ) : (
                recentCommits.map((commit, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="card-hover h-full bg-white dark:bg-gray-900 border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-primary font-medium">{commit.repo}</span>
                          <span className="text-sm text-muted-foreground">{commit.date}</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <Code size={16} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{commit.count} commits</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="ml-2 -translate-y-1/2" />
            <CarouselNext className="mr-2 -translate-y-1/2" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="rounded-full">
            <a href="/projects" className="flex items-center gap-2">
              View All Projects
              <GitBranch size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
