
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Lead frontend development for multiple projects, mentoring junior developers, and implementing best practices. Reduced load times by 40% and improved accessibility scores.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Austin, TX",
    period: "2018 - 2021",
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with design teams to implement responsive user interfaces.",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Web Creators Co.",
    location: "Boston, MA",
    period: "2016 - 2018",
    description: "Assisted in building client websites, implemented pixel-perfect designs, and contributed to internal tooling development.",
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2014 - 2016",
    description: "Specialized in Human-Computer Interaction and Data Visualization. Graduated with honors.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2010 - 2014",
    description: "Coursework included algorithm design, software architecture, and web development.",
  },
];

const Resume = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center">
            <SectionHeading
              title="Resume"
              subtitle="My professional journey and educational background."
              className="mt-6 md:mt-12"
            />
            <div className="hidden md:block">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="md:hidden mt-4">
            <Button size="sm" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="mt-12 space-y-16">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <Card key={exp.id} className="p-6 border transition-all hover:border-primary/50">
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">{exp.period}</div>
                        <div className="text-sm text-muted-foreground">{exp.location}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <div className="text-primary">{exp.company}</div>
                        <p className="mt-2 text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card key={edu.id} className="p-6 border transition-all hover:border-primary/50">
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">{edu.period}</div>
                        <div className="text-sm text-muted-foreground">{edu.location}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <div className="text-primary">{edu.institution}</div>
                        <p className="mt-2 text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Frontend Development</span>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Backend Development</span>
                        <span className="text-sm text-muted-foreground">80%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mobile Development</span>
                        <span className="text-sm text-muted-foreground">70%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Database Design</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Soft Skills</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Communication</span>
                        <span className="text-sm text-muted-foreground">95%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Teamwork</span>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Problem Solving</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Time Management</span>
                        <span className="text-sm text-muted-foreground">80%</span>
                      </div>
                      <div className="w-full bg-accent h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resume;
