import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Calendar, Code2, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Hero = () => {
  const personalInfo = [
    {
      icon: MapPin,
      title: "Location",
      description: "Boston, MA, USA",
      color: "from-blue-500/20 to-cyan-500/30",
      delay: "0.1s"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Northeastern University",
      color: "from-purple-500/20 to-pink-500/30",
      delay: "0.2s"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "2+ Years",
      color: "from-green-500/20 to-emerald-500/30",
      delay: "0.3s"
    },
    {
      icon: Calendar,
      title: "Available For",
      description: "Internships & Full-time",
      color: "from-orange-500/20 to-red-500/30",
      delay: "0.4s"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0,var(--tw-gradient-to)_100%)] from-blue-50 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Code2 className="w-4 h-4 mr-2" />
                Software Engineer
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Full Stack Developer
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              <span className="text-gradient">Hi, I'm Huzaifa Malik</span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-foreground/80">
                Crafting Digital Excellence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. 
              Transforming ideas into elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="group rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-primary/5">
                <a href="/resume" rel="noopener noreferrer" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com/huzaifa-vartana"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-all p-2 rounded-full hover:bg-primary/10 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/huzaifa-malik-37457b135/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-all p-2 rounded-full hover:bg-primary/10 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:huzaifamalik47@gmail.com" 
                className="text-foreground/80 hover:text-foreground transition-all p-2 rounded-full hover:bg-primary/10 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://stackoverflow.com/users/12979235/huzaifa-malik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-all p-2 rounded-full hover:bg-primary/10 hover:scale-110"
                aria-label="Stack Overflow"
              >
                <BsStackOverflow size={20} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50">
                {personalInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: info.delay }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative">
                      <div className="transform transition-transform duration-500 group-hover:scale-110 mb-4">
                        <info.icon className="w-8 h-8 text-foreground/80 group-hover:text-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-300/20 to-orange-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-cyan-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-500/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
