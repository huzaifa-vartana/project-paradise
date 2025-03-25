import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SectionHeading } from "@/components/ui/section-heading";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code, Download, GraduationCap, Lightbulb, MapPin, MessageSquare } from "lucide-react";

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
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <SectionHeading
              title="Resume"
              subtitle="My professional journey and educational background."
              className="mt-0"
            />
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="mt-16 space-y-24">
            {/* Experience Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/20 dark:to-blue-900/30 rounded-xl text-primary">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Experience</h3>
              </div>
              
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 space-y-0">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={exp.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative mb-12 last:mb-0"
                  >
                    <div className="absolute -left-[41px] p-2 bg-gradient-to-r from-primary to-blue-400 rounded-full shadow-lg">
                      <div className="bg-white dark:bg-gray-950 rounded-full p-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10 transition-all duration-300 hover:-translate-y-1 group">
                      <div className="p-8">
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div>
                              <h4 className="text-2xl font-bold text-gradient group-hover:text-primary transition-colors">{exp.title}</h4>
                              <div className="text-primary font-medium text-lg">{exp.company}</div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                              <div className="flex items-center text-sm font-medium text-muted-foreground gap-1.5 bg-gray-100 dark:bg-gray-800/60 px-4 py-1.5 rounded-full">
                                <Calendar className="h-4 w-4 mr-1" />
                                {exp.period}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground gap-1.5">
                                <MapPin className="h-4 w-4 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/20 dark:to-blue-900/30 rounded-xl text-primary">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Education</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card 
                      className="h-full p-8 border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground bg-gray-100 dark:bg-gray-800/60 px-4 py-1.5 rounded-full">
                            {edu.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h4>
                          <div className="text-primary font-medium text-lg mt-1">{edu.institution}</div>
                          <p className="mt-3 text-muted-foreground leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/20 dark:to-blue-900/30 rounded-xl text-primary">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary/10 to-blue-100/50 dark:from-primary/20 dark:to-blue-900/30 p-6 border-b flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-bold">Technical Skills</h4>
                  </div>
                  <CardContent className="p-8">
                    <ScrollArea className="h-[320px] pr-4">
                      <div className="space-y-8">
                        {technicalSkills.map((skill, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="space-y-3"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-lg">{skill.name}</span>
                              <span className="text-sm font-medium text-primary">{skill.value}%</span>
                            </div>
                            <Slider
                              defaultValue={[skill.value]}
                              max={100}
                              step={1}
                              disabled
                              className="cursor-default"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary/10 to-blue-100/50 dark:from-primary/20 dark:to-blue-900/30 p-6 border-b flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-bold">Soft Skills</h4>
                  </div>
                  <CardContent className="p-8">
                    <ScrollArea className="h-[320px] pr-4">
                      <div className="space-y-8">
                        {softSkills.map((skill, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="space-y-3"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-lg">{skill.name}</span>
                              <span className="text-sm font-medium text-primary">{skill.value}%</span>
                            </div>
                            <Slider
                              defaultValue={[skill.value]}
                              max={100}
                              step={1}
                              disabled
                              className="cursor-default"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resume;
