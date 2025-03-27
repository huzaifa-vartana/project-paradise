
import { Youtube } from "lucide-react";

interface ErrorMessageProps {
  error: string | null;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;
  
  return (
    <div className="text-center mb-6">
      <p className="text-yellow-600 dark:text-yellow-400 inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full text-sm">
        <Youtube className="w-4 h-4" />
        Using cached or sample videos due to API limit. {error}
      </p>
    </div>
  );
};
