
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  Award,
  Download,
  Briefcase,
  Sparkles,
  GraduationCap,
  Calendar,
  MapPin,
  Lightbulb,
  Code,
  MessageSquare,
  ExternalLink,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Lead frontend development for multiple projects, mentoring junior developers, and implementing best practices. Reduced load times by 40% and improved accessibility scores.",
    achievements: [
      "Led a team of 5 developers to successfully deliver a major application redesign",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Mentored 3 junior developers who were later promoted"
    ],
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Austin, TX",
    period: "2018 - 2021",
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with design teams to implement responsive user interfaces.",
    achievements: [
      "Reduced API response time by 65% through caching strategies",
      "Built customer-facing dashboard increasing client satisfaction by 40%",
      "Implemented responsive design patterns for all company products"
    ],
    tags: ["Node.js", "Express", "MongoDB", "React"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Web Creators Co.",
    location: "Boston, MA",
    period: "2016 - 2018",
    description: "Assisted in building client websites, implemented pixel-perfect designs, and contributed to internal tooling development.",
    achievements: [
      "Developed over 30 client websites with responsive designs",
      "Created internal tool reducing project setup time by 30%",
      "Collaborated with design team to improve UI/UX workflows"
    ],
    tags: ["JavaScript", "HTML/CSS", "jQuery", "WordPress"]
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
    achievements: [
      "Published paper on advanced data visualization techniques",
      "Teaching assistant for Introduction to Programming course",
      "Dean's List all semesters"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2010 - 2014",
    description: "Coursework included algorithm design, software architecture, and web development.",
    achievements: [
      "Graduated with 3.8 GPA",
      "Led development team in senior project winning first place",
      "Software Engineering Club President (2012-2014)"
    ]
  },
];

const technicalSkills = [
  { name: "Frontend Development", value: 90 },
  { name: "Backend Development", value: 80 },
  { name: "Mobile Development", value: 70 },
  { name: "Database Design", value: 85 },
  { name: "UI/UX Design", value: 75 },
  { name: "DevOps", value: 65 },
  { name: "Cloud Services", value: 80 }
];

const softSkills = [
  { name: "Communication", value: 95 },
  { name: "Teamwork", value: 90 },
  { name: "Problem Solving", value: 85 },
  { name: "Time Management", value: 80 },
  { name: "Leadership", value: 85 },
  { name: "Adaptability", value: 88 },
  { name: "Creativity", value: 82 }
];

const Resume = () => {
  return (
    <PageLayout>
      <div className="py-16 md:py-24 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-pink-50/20 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/5 min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header Section with Download Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
              <SectionHeading
                title="Professional Journey"
                subtitle="My experience, education, and skills that have shaped my career"
                className="mt-0"
              />
              <Button 
                size="lg" 
                className="group relative overflow-hidden hover:text-white transition-all duration-500 border-0 bg-white hover:bg-indigo-600 text-indigo-600 shadow-md hover:shadow-xl"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download CV
                </span>
              </Button>
            </div>

            {/* Experience Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 rounded-xl text-white bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Work Experience
                </h2>
              </div>

              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={cn(
                      "relative mb-16 last:mb-0",
                      "md:w-1/2",
                      index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                    )}
                  >
                    {/* Timeline dot */}
                    <div 
                      className={cn(
                        "absolute top-0 size-6 rounded-full border-4 border-white dark:border-gray-900 z-10 bg-gradient-to-r from-indigo-500 to-purple-500",
                        index % 2 === 0 ? "right-[-12px] md:right-[-11px]" : "left-[-12px] md:left-[-11px]"
                      )}
                    />

                    {/* Date badge floating */}
                    <div 
                      className={cn(
                        "absolute top-0 bg-white dark:bg-gray-800 shadow-lg rounded-full py-2 px-4 flex items-center text-sm border border-indigo-100 dark:border-indigo-900 z-10",
                        index % 2 === 0 
                          ? "md:right-[-150px] right-0" 
                          : "md:left-[-150px] left-0"
                      )}
                    >
                      <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    
                    {/* Content Card */}
                    <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-1">
                      <div className="p-6 relative overflow-hidden">
                        {/* Background decorator */}
                        <div className="absolute -right-20 -top-20 size-40 rounded-full bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20 blur-xl" />
                        
                        <div className="relative z-10">
                          <div className="flex flex-col gap-1 mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <div className="font-medium text-xl text-indigo-600 dark:text-indigo-400">
                                {exp.company}
                              </div>
                              <div className="hidden sm:block text-gray-400">•</div>
                              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                <MapPin className="h-4 w-4 mr-1 text-indigo-500" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 dark:text-gray-300 mb-5">
                            {exp.description}
                          </p>
                          
                          {/* Key Achievements */}
                          <div className="mb-5">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                              <Lightbulb className="h-4 w-4 mr-2 text-amber-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <Check className="h-4 w-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Technology Tags */}
                          <div className="flex flex-wrap gap-2">
                            {exp.tags?.map((tag, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-24"
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 rounded-xl text-white bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Education
                </h2>
              </div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="relative"
                  >
                    <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 md:p-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm group">
                      <div className="md:flex">
                        {/* Left decoration & info */}
                        <div className="md:w-1/3 p-6 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent dark:from-gray-900/50" />
                          
                          <div className="relative z-10">
                            <div className="flex gap-2 items-center mb-2">
                              <Award className="h-6 w-6 text-purple-500" />
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {edu.degree}
                              </h3>
                            </div>
                            <div className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">
                              {edu.institution}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <MapPin className="h-4 w-4 mr-1 text-purple-500" />
                              {edu.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                              {edu.period}
                            </div>
                          </div>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="mt-6 rounded-full border-purple-200 hover:bg-purple-100 hover:text-purple-700 text-purple-600 dark:border-purple-800 dark:hover:bg-purple-900 dark:text-purple-400 w-full flex items-center justify-center"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Visit Website
                          </Button>
                        </div>
                        
                        {/* Right content */}
                        <div className="md:w-2/3 p-6 md:p-8">
                          <p className="text-gray-700 dark:text-gray-300 mb-5">
                            {edu.description}
                          </p>
                          
                          {/* Key Achievements */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <Sparkles className="h-4 w-4 mr-2 text-amber-500" />
                              Highlights
                            </h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <Check className="h-4 w-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 rounded-xl text-white bg-gradient-to-br from-pink-500 to-orange-500 shadow-md">
                  <Code className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Skills
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <Card className="overflow-hidden border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/10 p-6 border-b flex items-center gap-3">
                    <Code className="h-5 w-5 text-pink-500" />
                    <h3 className="text-xl font-bold">Technical Skills</h3>
                  </div>
                  <div className="p-8 space-y-8">
                    {technicalSkills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-pink-600 dark:text-pink-400">{skill.value}%</span>
                        </div>
                        <Slider
                          defaultValue={[skill.value]}
                          max={100}
                          step={1}
                          className="cursor-default"
                          disabled
                          trackClassName="bg-gradient-to-r from-pink-500 to-orange-500 h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Soft Skills */}
                <Card className="overflow-hidden border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 p-6 border-b flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-purple-500" />
                    <h3 className="text-xl font-bold">Soft Skills</h3>
                  </div>
                  <div className="p-8 space-y-8">
                    {softSkills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.value}%</span>
                        </div>
                        <Slider
                          defaultValue={[skill.value]}
                          max={100}
                          step={1}
                          className="cursor-default"
                          disabled
                          trackClassName="bg-gradient-to-r from-purple-500 to-pink-500 h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;
