
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Play, Video } from "lucide-react";
import { Link } from "react-router-dom";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
}

export const YouTubeHighlight = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const channelId = "UCn5GD-PNXWmJ4mAXb7k6NIQ"; // CodeGreen channel ID

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        // YouTube Data API v3 key (this is a public API key, so it's fine to include in the code)
        const apiKey = "AIzaSyDKNyedCWc_Qa4RT-wnUbzjBuJrjdsfI6s";
        const maxResults = 3;
        
        // Fetch channel uploads
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        
        const data = await response.json();
        
        if (data.items) {
          // Get video IDs
          const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
          
          // Fetch video details including statistics and contentDetails
          const videoDetailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,contentDetails,statistics`
          );
          
          const videoDetails = await videoDetailsResponse.json();
          
          // Format video data
          const formattedVideos = videoDetails.items.map((item: any) => {
            // Convert ISO 8601 duration to minutes:seconds
            let duration = item.contentDetails.duration;
            duration = duration.replace('PT', '');
            let minutes = 0;
            let seconds = 0;
            
            if (duration.includes('M')) {
              const parts = duration.split('M');
              minutes = parseInt(parts[0]);
              duration = parts[1];
            }
            
            if (duration.includes('S')) {
              seconds = parseInt(duration.replace('S', ''));
            }
            
            const formattedDuration = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            
            // Format view count
            const viewCount = parseInt(item.statistics.viewCount);
            let formattedViews;
            
            if (viewCount >= 1000000) {
              formattedViews = (viewCount / 1000000).toFixed(1) + 'M';
            } else if (viewCount >= 1000) {
              formattedViews = (viewCount / 1000).toFixed(1) + 'K';
            } else {
              formattedViews = viewCount.toString();
            }
            
            return {
              id: item.id,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              views: formattedViews,
              duration: formattedDuration
            };
          });
          
          setVideos(formattedVideos);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        // Fallback to sample data if there's an error
        setVideos([
          {
            id: "1",
            title: "Building Modern Web Applications",
            views: "1.2K",
            duration: "15:24",
            thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg",
          },
          {
            id: "2",
            title: "React Hooks Deep Dive",
            views: "3.5K",
            duration: "22:47",
            thumbnail: "https://i.ytimg.com/vi/O6P86uwfdR0/maxresdefault.jpg",
          },
          {
            id: "3",
            title: "Mastering TypeScript",
            views: "2.8K",
            duration: "18:33",
            thumbnail: "https://i.ytimg.com/vi/30LWjhZzg50/maxresdefault.jpg",
          },
        ]);
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
                  <p>Tutorials on modern web development</p>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5 text-primary mr-3" />
                  <p>Coding sessions and project builds</p>
                </div>
                <div className="flex items-center">
                  <Youtube className="w-5 h-5 text-primary mr-3" />
                  <p>Regular content on React, TypeScript, and more</p>
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
                      <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
                    </div>
                    <CardContent className="p-4">
                      <div className="h-5 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
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
