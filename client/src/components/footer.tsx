import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">Shubham Verma</h3>
          <p className="text-muted-foreground mb-6" data-testid="footer-tagline">
            Mobile App Developer specializing in Android & AI
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/sh7verma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubham-verma-670818173/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:shubham.verma740@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2024 Shubham Verma. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
