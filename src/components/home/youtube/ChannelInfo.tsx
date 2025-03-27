
import { Button } from "@/components/ui/button";
import { Play, Video, Youtube } from "lucide-react";

export const ChannelInfo = () => {
  return (
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
          <p>Data Structure and Algorithms</p>
        </div>
        <div className="flex items-center">
          <Play className="w-5 h-5 text-primary mr-3" />
          <p>Leetcode Problems</p>
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
  );
};
