
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Sample project data
const projects = [
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
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides current and forecasted weather data. Users can search for locations and save their favorite cities.",
    tags: ["JavaScript", "React", "API Integration", "Styled Components"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "An application to help users track income, expenses, and savings goals. Includes data visualization and budget planning features.",
    tags: ["React", "Chart.js", "Firebase", "Material UI"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description: "A platform for food enthusiasts to share and discover recipes. Features include user profiles, recipe ratings, and search functionality.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Authentication"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "An application for tracking workouts, progress, and fitness goals. Includes exercise libraries, progress charts, and personalized recommendations.",
    tags: ["React Native", "Redux", "Firebase", "Health API"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading
            title="Projects"
            subtitle="A collection of projects I've built, from web applications to mobile apps and everything in between."
            className="mt-6 md:mt-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden card-hover border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild size="sm" variant="outline">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
