
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = "left",
  className,
}) => {
  return (
    <div 
      className={cn(
        "mb-12",
        alignment === "center" && "text-center",
        alignment === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
