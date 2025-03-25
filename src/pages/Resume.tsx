
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Lightbulb, Code, MessageSquare, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";

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

const technicalSkills = [
  { name: "Frontend Development", value: 90 },
  { name: "Backend Development", value: 80 },
  { name: "Mobile Development", value: 70 },
  { name: "Database Design", value: 85 },
  { name: "UI/UX Design", value: 75 }
];

const softSkills = [
  { name: "Communication", value: 95 },
  { name: "Teamwork", value: 90 },
  { name: "Problem Solving", value: 85 },
  { name: "Time Management", value: 80 },
  { name: "Leadership", value: 85 }
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
              <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
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
            {/* Experience Section - Modernized */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Experience</h3>
              </div>
              
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 space-y-0">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.id} 
                    className={`relative mb-10 transition-all animate-fade-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute -left-[41px] p-2 bg-gradient-to-r from-primary to-blue-400 rounded-full">
                      <div className="bg-white dark:bg-gray-950 rounded-full p-1">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    
                    <Card className="overflow-hidden shadow-md hover:shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10 transition-all duration-300 hover:-translate-y-1">
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                            <div>
                              <h4 className="text-xl font-semibold text-gradient">{exp.title}</h4>
                              <div className="text-primary font-medium">{exp.company}</div>
                            </div>
                            <div className="flex flex-col items-start md:items-end">
                              <div className="flex items-center text-sm font-medium text-muted-foreground gap-1 bg-gray-100 dark:bg-gray-800/60 px-3 py-1 rounded-full">
                                <Calendar className="h-3.5 w-3.5 mr-1" />
                                {exp.period}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground mt-1 gap-1">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card 
                    key={edu.id} 
                    className="p-6 border transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">{edu.period}</div>
                        <div className="text-sm text-muted-foreground">{edu.location}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <div className="text-primary font-medium">{edu.institution}</div>
                        <p className="mt-2 text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/10 dark:to-blue-900/10 p-4 border-b flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-semibold">Technical Skills</h4>
                  </div>
                  <CardContent className="p-6">
                    <ScrollArea className="h-[320px] pr-4">
                      <div className="space-y-6">
                        {technicalSkills.map((skill, index) => (
                          <div key={index} className="mb-6">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.value}%</span>
                            </div>
                            <Slider
                              defaultValue={[skill.value]}
                              max={100}
                              step={1}
                              disabled
                              className="cursor-default"
                            />
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/10 dark:to-blue-900/10 p-4 border-b flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-semibold">Soft Skills</h4>
                  </div>
                  <CardContent className="p-6">
                    <ScrollArea className="h-[320px] pr-4">
                      <div className="space-y-6">
                        {softSkills.map((skill, index) => (
                          <div key={index} className="mb-6">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.value}%</span>
                            </div>
                            <Slider
                              defaultValue={[skill.value]}
                              max={100}
                              step={1}
                              disabled
                              className="cursor-default"
                            />
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resume;
