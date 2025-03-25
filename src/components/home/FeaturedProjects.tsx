
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include product listings, cart functionality, payment processing, and user authentication.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Includes features like drag-and-drop task organization, priority settings, and team collaboration.",
    tags: ["TypeScript", "React", "Redux", "Firebase"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences."
          alignment="center"
        />

        <div className="space-y-24 mt-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:grid-flow-dense"
              } gap-10 items-center`}
            >
              <div className={`space-y-6 ${index % 2 !== 0 && "md:col-start-2"}`}>
                <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 0 && "md:col-start-2"}`}>
                <div className="relative group card-hover">
                  <div className="overflow-hidden rounded-lg border bg-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
