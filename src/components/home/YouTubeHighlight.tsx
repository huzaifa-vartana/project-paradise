
import { SectionHeading } from "@/components/ui/section-heading";
import { useYouTubeVideos } from "@/hooks/use-youtube-videos";
import { ChannelInfo } from "./youtube/ChannelInfo";
import { ErrorMessage } from "./youtube/ErrorMessage";
import { VideoGrid } from "./youtube/VideoGrid";

export const YouTubeHighlight = () => {
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "UCmXmlB4-HJytD7wek0Uo97A"; // Default to a channel ID if env var is missing
  const { videos, loading, error } = useYouTubeVideos(channelId);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="CodeGreen YouTube"
          subtitle="Sharing knowledge and insights through video tutorials and coding sessions"
          alignment="center"
        />

        <ErrorMessage error={error} />

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-10">
          <div className="w-full md:w-2/5 space-y-6 order-2 md:order-1">
            <ChannelInfo />
          </div>

          <div className="w-full md:w-3/5 order-1 md:order-2">
            <VideoGrid videos={videos} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};
