
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0,var(--tw-gradient-to)_100%)] from-blue-50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Software Engineer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              <span className="text-gradient">Hi, I'm John Doe</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="group rounded-full">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/30 float-animation">
              {/* Profile image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-primary/40 text-lg font-medium">
                Profile Image
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl -rotate-6 scale-105"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-300/20 to-orange-400/30 rounded-full blur-md"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-cyan-400/30 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
