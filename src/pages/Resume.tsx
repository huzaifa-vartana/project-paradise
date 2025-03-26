import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Building2,
  Calendar,
  Download,
  MapPin,
  MessageSquare,
  Rocket,
  School,
  Sparkles
} from "lucide-react";

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
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-purple-50/30 to-blue-50/30 dark:from-background dark:via-purple-950/10 dark:to-blue-950/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <SectionHeading
              title="Resume"
              subtitle="My professional journey and educational background."
              className="mt-0"
            />
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl"
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
                <div className="p-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl text-purple-500">
                  <Rocket className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Experience</h3>
              </div>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-purple-500/20 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-purple-500/10" />
                
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={exp.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16 mb-12 last:mb-0"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                      <div className="absolute w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg animate-pulse" />
                      <div className="absolute w-6 h-6 bg-white dark:bg-gray-950 rounded-full shadow-lg flex items-center justify-center">
                        <Building2 className="h-3 w-3 text-purple-500" />
                      </div>
                    </div>
                    
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/10 transition-all duration-300 hover:-translate-y-1 group">
                      <div className="p-8">
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div>
                              <h4 className="text-2xl font-bold text-gradient group-hover:text-purple-500 transition-colors">{exp.title}</h4>
                              <div className="text-purple-500 font-medium text-lg">{exp.company}</div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                              <div className="flex items-center text-sm font-medium text-muted-foreground gap-1.5 bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 rounded-full">
                                <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                                {exp.period}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground gap-1.5">
                                <MapPin className="h-4 w-4 mr-1 text-purple-500" />
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
                <div className="p-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl text-purple-500">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Education</h3>
              </div>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-purple-500/20 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-purple-500/10" />
                
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-16 mb-12 last:mb-0"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                      <div className="absolute w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg animate-pulse" />
                      <div className="absolute w-6 h-6 bg-white dark:bg-gray-950 rounded-full shadow-lg flex items-center justify-center">
                        <School className="h-3 w-3 text-purple-500" />
                      </div>
                    </div>
                    
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/10 transition-all duration-300 hover:-translate-y-1 group">
                      <div className="p-8">
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div>
                              <h4 className="text-2xl font-bold text-gradient group-hover:text-purple-500 transition-colors">{edu.degree}</h4>
                              <div className="text-purple-500 font-medium text-lg">{edu.institution}</div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                              <div className="flex items-center text-sm font-medium text-muted-foreground gap-1.5 bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 rounded-full">
                                <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                                {edu.period}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground gap-1.5">
                                <MapPin className="h-4 w-4 mr-1 text-purple-500" />
                                {edu.location}
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed">{edu.description}</p>
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
                <div className="p-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl text-purple-500">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 p-6 border-b flex items-center gap-3">
                    <Brain className="h-6 w-6 text-purple-500" />
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
                              <span className="text-sm font-medium text-purple-500">{skill.value}%</span>
                            </div>
                            <div className="relative h-2 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className="absolute h-full bg-gradient-to-r from-purple-500 to-blue-500"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 p-6 border-b flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-purple-500" />
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
                              <span className="text-sm font-medium text-purple-500">{skill.value}%</span>
                            </div>
                            <div className="relative h-2 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className="absolute h-full bg-gradient-to-r from-purple-500 to-blue-500"
                              />
                            </div>
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
