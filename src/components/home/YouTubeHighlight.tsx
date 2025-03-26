
import React from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Play, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const YouTubeHighlight = () => {
  const featuredVideos = [
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
  ];

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
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredVideos.map((video, index) => (
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
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </div>
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
