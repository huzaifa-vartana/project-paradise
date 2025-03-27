
import { useEffect, useState } from "react";
import { 
  YOUTUBE_CACHE_KEY, 
  YOUTUBE_CACHE_EXPIRY, 
  YouTubeVideo, 
  sampleYouTubeVideos, 
  formatDuration, 
  formatViewCount 
} from "@/lib/youtube";

export const useYouTubeVideos = (channelId: string) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setError(null);
        
        // Try to get videos from cache first
        const cachedData = localStorage.getItem(YOUTUBE_CACHE_KEY);
        if (cachedData) {
          const { videos, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > YOUTUBE_CACHE_EXPIRY;
          
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
          setVideos(sampleYouTubeVideos);
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
          
          // Format duration
          const duration = formatDuration(detailsItem?.contentDetails?.duration || 'PT0M0S');
          
          // Format view count
          const viewCount = parseInt(detailsItem?.statistics?.viewCount || '0');
          const formattedViews = formatViewCount(viewCount);
          
          return {
            id: videoId,
            title: searchItem.snippet.title,
            thumbnail: searchItem.snippet.thumbnails.high?.url || searchItem.snippet.thumbnails.default?.url,
            views: formattedViews,
            duration: duration
          };
        });
        
        // Cache the results
        localStorage.setItem(YOUTUBE_CACHE_KEY, JSON.stringify({
          videos: formattedVideos,
          timestamp: Date.now()
        }));
        
        setVideos(formattedVideos);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch videos");
        
        // First try to use cached data even if it's expired
        const cachedData = localStorage.getItem(YOUTUBE_CACHE_KEY);
        if (cachedData) {
          const { videos } = JSON.parse(cachedData);
          console.log("Using expired cache as fallback");
          setVideos(videos);
        } else {
          // Fall back to sample data
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
