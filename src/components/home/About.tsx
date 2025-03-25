
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="About Me"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Background</h3>
            <p className="text-muted-foreground">
              I'm a software engineer with 5+ years of experience in building web and mobile applications. 
              I have a strong foundation in full-stack development and a passion for creating exceptional user experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Expertise</h3>
            <p className="text-muted-foreground">
              My expertise includes JavaScript/TypeScript, React, Node.js, and various modern web technologies. 
              I specialize in building responsive, accessible, and performant applications with clean and maintainable code.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Interests</h3>
            <p className="text-muted-foreground">
              Beyond coding, I'm interested in UX/UI design, open-source contribution, and staying updated with the latest tech trends. 
              I enjoy solving complex problems and learning new technologies.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-display font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
              "MongoDB", "PostgreSQL", "Redux", "GraphQL", "REST API", "HTML/CSS",
              "Tailwind CSS", "Git", "CI/CD", "Testing"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
