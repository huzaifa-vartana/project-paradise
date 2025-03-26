
import { Github, Linkedin, Mail } from "lucide-react";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30 py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Huzaifa Malik</h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer specializing in creating elegant, functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Projects
              </Link>
              <Link to="/resume" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Resume
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/huzaifa-vartana"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/huzaifa-malik-37457b135/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:huzaifamalik47@gmail.com"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://stackoverflow.com/users/12979235/huzaifa-malik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="Stack Overflow"
              >
                <BsStackOverflow size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Huzaifa Malik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
