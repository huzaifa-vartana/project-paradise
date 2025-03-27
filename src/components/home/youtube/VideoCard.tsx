
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Card className="overflow-hidden card-hover backdrop-blur-sm bg-background/50 border border-border/50">
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
  );
};
