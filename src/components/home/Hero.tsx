
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Software Engineer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              Hi, I'm John Doe
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30">
              {/* Profile image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-primary/40 text-lg font-medium">
                Profile Image
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-primary/5 rounded-xl -rotate-6 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
