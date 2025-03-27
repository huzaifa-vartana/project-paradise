// Cache key for localStorage
export const YOUTUBE_CACHE_KEY = 'youtube_videos_cache';
export const YOUTUBE_CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds (increased from 24 hours)

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
}

// Sample data for fallback when API requests fail or quota is exceeded
export const sampleYouTubeVideos: YouTubeVideo[] = [
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

// Format duration from ISO 8601
export const formatDuration = (isoDuration: string): string => {
  let duration = isoDuration.replace('PT', '');
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
  
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

// Format view count
export const formatViewCount = (viewCount: number): string => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + 'M';
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + 'K';
  } else {
    return viewCount.toString();
  }
};

// New utility functions for optimized caching
export const getYouTubeCacheStatus = (): { 
  hasCache: boolean, 
  isExpired: boolean, 
  lastFetched: number | null,
  videos: YouTubeVideo[] | null 
} => {
  try {
    const cachedData = localStorage.getItem(YOUTUBE_CACHE_KEY);
    
    if (!cachedData) {
      return { hasCache: false, isExpired: true, lastFetched: null, videos: null };
    }
    
    const { videos, timestamp } = JSON.parse(cachedData);
    const isExpired = Date.now() - timestamp > YOUTUBE_CACHE_EXPIRY;
    
    return { 
      hasCache: true, 
      isExpired, 
      lastFetched: timestamp,
      videos 
    };
  } catch (e) {
    return { hasCache: false, isExpired: true, lastFetched: null, videos: null };
  }
};

export const saveYouTubeCache = (videos: YouTubeVideo[]): void => {
  try {
    localStorage.setItem(YOUTUBE_CACHE_KEY, JSON.stringify({
      videos,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.error("Failed to save YouTube cache:", e);
  }
};

// Last API fetch tracking to prevent excessive retries
const API_FETCH_TRACKING_KEY = 'youtube_last_fetch_attempt';

export const canAttemptFetch = (): boolean => {
  try {
    const lastAttempt = localStorage.getItem(API_FETCH_TRACKING_KEY);
    
    if (!lastAttempt) return true;
    
    const timeSinceLastAttempt = Date.now() - parseInt(lastAttempt);
    // Only allow a new fetch attempt after 4 hours if the previous one failed
    return timeSinceLastAttempt > 4 * 60 * 60 * 1000;
  } catch (e) {
    return true;
  }
};

export const recordFetchAttempt = (): void => {
  try {
    localStorage.setItem(API_FETCH_TRACKING_KEY, Date.now().toString());
  } catch (e) {
    console.error("Failed to record fetch attempt:", e);
  }
};
