
import { Youtube, Clock } from "lucide-react";
import { getYouTubeCacheStatus } from "@/lib/youtube";

interface ErrorMessageProps {
  error: string | null;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;
  
  const cacheStatus = getYouTubeCacheStatus();
  const cacheTimeMessage = cacheStatus.lastFetched 
    ? `Last updated ${new Date(cacheStatus.lastFetched).toLocaleDateString()}`
    : "Using sample data";
  
  return (
    <div className="text-center mb-6">
      <p className="text-yellow-600 dark:text-yellow-400 inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full text-sm">
        <Youtube className="w-4 h-4" />
        <span>Using cached videos due to API limits.</span>
        <Clock className="w-3 h-3 ml-1" />
        <span className="text-xs opacity-80">{cacheTimeMessage}</span>
      </p>
    </div>
  );
};
