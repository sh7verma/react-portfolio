import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 intersection-animate">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold" data-testid="hero-name">
              <span className="gradient-text">Shubham Verma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium" data-testid="hero-title">
              Mobile App Developer – Android & AI
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Senior developer with 8+ years of experience building fast, privacy-first Android apps using 
            Kotlin, Jetpack Compose, Hilt, Room, Firebase, TFLite, ML Kit, and ONNX Runtime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/sh7verma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubham-verma-670818173/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:shubham.verma740@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
