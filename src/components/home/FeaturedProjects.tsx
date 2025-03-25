
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
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_35%_at_60%_40%,var(--tw-gradient-from)_0,var(--tw-gradient-to)_100%)] from-accent to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences."
          alignment="center"
        />

        <div className="space-y-32 mt-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:grid-flow-dense"
              } gap-12 items-center`}
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
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 0 && "md:col-start-2"}`}>
                <div className="relative group card-hover">
                  <div className="overflow-hidden rounded-xl border shadow-sm bg-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-video transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm text-white/80">View project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="group rounded-full">
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
