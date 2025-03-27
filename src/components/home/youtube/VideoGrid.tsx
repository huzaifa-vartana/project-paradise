
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { VideoCard } from "./VideoCard";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoGridProps {
  videos: YouTubeVideo[];
  loading: boolean;
}

export const VideoGrid = ({ videos, loading }: VideoGridProps) => {
  return (
    <>
      {loading ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden card-hover backdrop-blur-sm bg-background/50 border border-border/50 rounded-lg">
              <div className="relative">
                <Skeleton className="w-full aspect-video" />
              </div>
              <div className="p-4">
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
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
    </>
  );
};
