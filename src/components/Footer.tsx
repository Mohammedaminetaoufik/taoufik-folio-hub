import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Mohamed Amine Taoufik</h3>
            <p className="text-primary-foreground/80">
              Full-Stack Developer & Software Engineer
            </p>
            <p className="text-primary-foreground/60">
              Creating innovative solutions with cutting-edge technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">ataoufik031@gmail.com</p>
              <p className="text-primary-foreground/80">+212 618657817</p>
              <p className="text-primary-foreground/80">Marrakech, Morocco</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mohammedaminetaoufik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-amine-taoufik-b800a9279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ataoufik031@gmail.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Mohamed Amine Taoufik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;