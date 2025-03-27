
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "@/components/ui/section-heading";
import { Play, Video, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
}

// Sample data for fallback when API requests fail or quota is exceeded
const sampleVideos: YouTubeVideo[] = [
  {
    id: "sample1",
    title: "Building Modern Web Applications",
    views: "1.2K",
    duration: "15:24",
    thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg",
  },
  {
    id: "sample2",
    title: "React Hooks Deep Dive",
    views: "3.5K",
    duration: "22:47",
    thumbnail: "https://i.ytimg.com/vi/O6P86uwfdR0/maxresdefault.jpg",
  },
  {
    id: "sample3",
    title: "Mastering TypeScript",
    views: "2.8K",
    duration: "18:33",
    thumbnail: "https://i.ytimg.com/vi/30LWjhZzg50/maxresdefault.jpg",
  },
];

// Cache key for localStorage
const CACHE_KEY = 'youtube_videos_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const YouTubeHighlight = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "UCmXmlB4-HJytD7wek0Uo97A"; // Default to a channel ID if env var is missing

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setError(null);
        
        // Try to get videos from cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { videos, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > CACHE_EXPIRY;
          
          if (!isExpired) {
            console.log("Using cached YouTube data");
            setVideos(videos);
            setLoading(false);
            return;
          } else {
            console.log("Cache expired, fetching fresh data");
          }
        }
        
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        
        if (!apiKey) {
          console.log("No API key found, using sample data");
          setVideos(sampleVideos);
          setLoading(false);
          return;
        }
        
        // Single request to get videos with all needed details in one go
        // Using the search endpoint with type=video and part=snippet
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=3&type=video`
        );
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error("YouTube API error:", errorData);
          throw new Error(`API error: ${errorData?.error?.message || response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) {
          throw new Error("No videos found for this channel");
        }
        
        // Get video IDs for a single follow-up request to get additional details
        const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
        
        // One additional request to get statistics and content details
        const videoDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=contentDetails,statistics`
        );
        
        if (!videoDetailsResponse.ok) {
          const errorData = await videoDetailsResponse.json();
          console.error("YouTube API video details error:", errorData);
          throw new Error(`API error: ${errorData?.error?.message || videoDetailsResponse.statusText}`);
        }
        
        const videoDetails = await videoDetailsResponse.json();
        
        // Format videos by combining data from both requests
        const formattedVideos = data.items.map((searchItem: any) => {
          const videoId = searchItem.id.videoId;
          const detailsItem = videoDetails.items.find((item: any) => item.id === videoId);
          
          // Format duration from ISO 8601
          let duration = detailsItem?.contentDetails?.duration || 'PT0M0S';
          duration = duration.replace('PT', '');
          let minutes = 0;
          let seconds = 0;
          
          if (duration.includes('H')) {
            const parts = duration.split('H');
            const hours = parseInt(parts[0]);
            minutes += hours * 60;
            duration = parts[1];
          }
          
          if (duration.includes('M')) {
            const parts = duration.split('M');
            minutes += parseInt(parts[0]);
            duration = parts[1];
          }
          
          if (duration.includes('S')) {
            seconds = parseInt(duration.replace('S', ''));
          }
          
          const formattedDuration = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
          
          // Format view count
          const viewCount = parseInt(detailsItem?.statistics?.viewCount || '0');
          let formattedViews;
          
          if (viewCount >= 1000000) {
            formattedViews = (viewCount / 1000000).toFixed(1) + 'M';
          } else if (viewCount >= 1000) {
            formattedViews = (viewCount / 1000).toFixed(1) + 'K';
          } else {
            formattedViews = viewCount.toString();
          }
          
          return {
            id: videoId,
            title: searchItem.snippet.title,
            thumbnail: searchItem.snippet.thumbnails.high?.url || searchItem.snippet.thumbnails.default?.url,
            views: formattedViews,
            duration: formattedDuration
          };
        });
        
        // Cache the results
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          videos: formattedVideos,
          timestamp: Date.now()
        }));
        
        setVideos(formattedVideos);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch videos");
        
        // First try to use cached data even if it's expired
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { videos } = JSON.parse(cachedData);
          console.log("Using expired cache as fallback");
          setVideos(videos);
        } else {
          // Fall back to sample data
          console.log("No cache available, using sample data");
          setVideos(sampleVideos);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="CodeGreen YouTube"
          subtitle="Sharing knowledge and insights through video tutorials and coding sessions"
          alignment="center"
        />

        {error && (
          <div className="text-center mb-6">
            <p className="text-yellow-600 dark:text-yellow-400 inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full text-sm">
              <Youtube className="w-4 h-4" />
              Using cached or sample videos due to API limit. {error}
            </p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-10">
          <div className="w-full md:w-2/5 space-y-6 order-2 md:order-1">
            <div className="relative p-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-blue-400/10 border border-border/30">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">@codegreen2133</h3>
                  <p className="text-muted-foreground">Programming & Development</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Video className="w-5 h-5 text-primary mr-3" />
                  <p>Data Structure and Algorithms</p>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5 text-primary mr-3" />
                  <p>Leetcode Problems</p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="group rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400" asChild>
                  <a 
                    href="https://www.youtube.com/@codegreen2133" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe to Channel
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 order-1 md:order-2">
            {loading ? (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden card-hover backdrop-blur-sm bg-background/50 border border-border/50">
                    <div className="relative">
                      <Skeleton className="w-full aspect-video" />
                    </div>
                    <CardContent className="p-4">
                      <Skeleton className="h-5 w-full mb-2" />
                      <Skeleton className="h-4 w-1/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <Card 
                    key={video.id}
                    className="overflow-hidden card-hover backdrop-blur-sm bg-background/50 border border-border/50"
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <a 
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Play className="w-5 h-5 text-white ml-1" />
                        </a>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium line-clamp-2 mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.views} views</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="rounded-full" asChild>
                <a 
                  href="https://www.youtube.com/@codegreen2133" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Videos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
