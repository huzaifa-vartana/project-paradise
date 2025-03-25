import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, Github, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "A cutting-edge analytics platform that leverages machine learning to provide real-time insights and predictive analytics. Features include interactive data visualization, custom reporting, and automated anomaly detection.",
    tags: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stats: {
      stars: "2.3k",
      contributors: "45",
      lastUpdated: "2 weeks ago"
    }
  },
  {
    id: 2,
    title: "Sustainable Energy Monitor",
    description: "An IoT-powered platform for monitoring and optimizing energy consumption in smart buildings. Includes real-time monitoring, automated optimization, and carbon footprint tracking.",
    tags: ["Next.js", "Node.js", "IoT", "GraphQL", "AWS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stats: {
      stars: "1.8k",
      contributors: "32",
      lastUpdated: "1 week ago"
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const FeaturedProjects = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_35%_at_60%_40%,var(--tw-gradient-from)_0,var(--tw-gradient-to)_100%)] from-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my latest innovations that push the boundaries of what's possible in web development."
          alignment="center"
        />

        <motion.div 
          className="space-y-32 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:grid-flow-dense"
              } gap-12 items-center`}
            >
              <div className={`space-y-6 ${index % 2 !== 0 && "md:col-start-2"}`}>
                <h3 className="text-3xl md:text-4xl font-display font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.stats.contributors}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.stats.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 0 && "md:col-start-2"}`}>
                <div className="relative group">
                  <div className="overflow-hidden rounded-2xl border shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-video transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 text-white">
                        <h4 className="text-xl font-medium mb-2">{project.title}</h4>
                        <p className="text-white/90">Click to explore project details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild size="lg" className="group rounded-full px-8 py-6 text-lg">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
