
import { useEffect, useState } from "react";
import { 
  YouTubeVideo, 
  sampleYouTubeVideos, 
  formatDuration, 
  formatViewCount,
  getYouTubeCacheStatus,
  saveYouTubeCache,
  canAttemptFetch,
  recordFetchAttempt
} from "@/lib/youtube";

export const useYouTubeVideos = (channelId: string) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setError(null);
        
        // Check cache status
        const cacheStatus = getYouTubeCacheStatus();
        
        // Use cache if it exists and is not expired
        if (cacheStatus.hasCache && !cacheStatus.isExpired) {
          console.log("Using cached YouTube data, fetched", new Date(cacheStatus.lastFetched!).toLocaleString());
          setVideos(cacheStatus.videos!);
          setLoading(false);
          return;
        }
        
        // Use expired cache but still try to fetch in background
        if (cacheStatus.hasCache && cacheStatus.videos) {
          console.log("Using expired cache but attempting to refresh");
          setVideos(cacheStatus.videos);
          setLoading(false);
          // Continue to fetch, but don't block the UI
        }
        
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        
        if (!apiKey) {
          console.log("No API key found, using sample data");
          setVideos(sampleYouTubeVideos);
          setLoading(false);
          return;
        }
        
        // Check if we should attempt a fetch based on rate limiting logic
        if (!canAttemptFetch()) {
          console.log("Too many recent fetch attempts, using cached or sample data");
          if (cacheStatus.videos) {
            // We've already set videos from cache above
          } else {
            setVideos(sampleYouTubeVideos);
          }
          setError("API rate limited. Try again later.");
          setLoading(false);
          return;
        }
        
        // Record this fetch attempt
        recordFetchAttempt();
        
        // Use a single combined API call to reduce quota usage
        // Instead of doing separate searches and video details requests,
        // we'll use the channels endpoint to get the uploads playlist,
        // then get the latest videos in one call
        
        // 1. First, get the uploads playlist ID for the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=contentDetails&maxResults=1`
        );
        
        if (!channelResponse.ok) {
          const errorData = await channelResponse.json();
          console.error("YouTube API channel error:", errorData);
          throw new Error(`API error: ${errorData?.error?.message || channelResponse.statusText}`);
        }
        
        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error("Channel not found");
        }
        
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        
        // 2. Now get the latest videos from the uploads playlist
        // This gives us all the details we need in a single call
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${uploadsPlaylistId}&part=snippet,contentDetails&maxResults=3`
        );
        
        if (!playlistResponse.ok) {
          const errorData = await playlistResponse.json();
          console.error("YouTube API playlist error:", errorData);
          throw new Error(`API error: ${errorData?.error?.message || playlistResponse.statusText}`);
        }
        
        const playlistData = await playlistResponse.json();
        
        if (!playlistData.items || playlistData.items.length === 0) {
          throw new Error("No videos found for this channel");
        }
        
        // Get video IDs for a more efficient batch request of stats
        const videoIds = playlistData.items.map((item: any) => item.contentDetails.videoId).join(',');
        
        // Get stats for all videos in a single request
        const videoStatsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=statistics,contentDetails&maxResults=3`
        );
        
        if (!videoStatsResponse.ok) {
          const errorData = await videoStatsResponse.json();
          console.error("YouTube API video stats error:", errorData);
          throw new Error(`API error: ${errorData?.error?.message || videoStatsResponse.statusText}`);
        }
        
        const videoStatsData = await videoStatsResponse.json();
        
        // Combine the data from both requests
        const formattedVideos = playlistData.items.map((item: any) => {
          const videoId = item.contentDetails.videoId;
          const statsItem = videoStatsData.items.find((stat: any) => stat.id === videoId);
          
          // Get the best thumbnail
          const thumbnails = item.snippet.thumbnails;
          const thumbnailUrl = thumbnails.maxres?.url || 
                              thumbnails.standard?.url || 
                              thumbnails.high?.url || 
                              thumbnails.medium?.url || 
                              thumbnails.default?.url;
          
          return {
            id: videoId,
            title: item.snippet.title,
            thumbnail: thumbnailUrl,
            views: formatViewCount(parseInt(statsItem?.statistics?.viewCount || '0')),
            duration: formatDuration(statsItem?.contentDetails?.duration || 'PT0M0S')
          };
        });
        
        // Cache the results
        saveYouTubeCache(formattedVideos);
        
        setVideos(formattedVideos);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch videos");
        
        // Use cache even if expired as fallback
        const cacheStatus = getYouTubeCacheStatus();
        if (cacheStatus.hasCache && cacheStatus.videos) {
          console.log("Using cached data as fallback after error");
          setVideos(cacheStatus.videos);
        } else {
          console.log("No cache available, using sample data");
          setVideos(sampleYouTubeVideos);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, [channelId]);

  return { videos, loading, error };
};
