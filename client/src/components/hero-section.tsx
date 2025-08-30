import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Smartphone, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0 },
    { icon: <Smartphone className="w-8 h-8" />, delay: 0.5 },
    { icon: <Zap className="w-6 h-6" />, delay: 1 },
    { icon: <Cpu className="w-7 h-7" />, delay: 1.5 }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-muted-foreground/20"
          style={{
            left: `${20 + (index * 20)}%`,
            top: `${30 + (index % 2) * 40}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-10, 10, -10],
            rotate: [-5, 5, -5]
          }}
          transition={{
            opacity: { delay: item.delay, duration: 0.6 },
            scale: { delay: item.delay, duration: 0.6 },
            y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          data-testid={`floating-icon-${index}`}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold" 
              data-testid="hero-name"
              variants={itemVariants}
            >
              <span className="gradient-text">Shubham Verma</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-muted-foreground font-medium" 
              data-testid="hero-title"
              variants={itemVariants}
            >
              Mobile App Developer – Android & AI
            </motion.h2>
          </motion.div>

          {/* Enhanced description with highlights */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
              Senior developer with <span className="text-primary font-semibold">8+ years</span> of experience building fast, privacy-first Android apps using 
              cutting-edge technologies.
            </p>
            
            {/* Tech highlights */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {["Kotlin", "Jetpack Compose", "TFLite", "ML Kit", "Room", "Firebase"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  data-testid={`tech-highlight-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Action buttons with enhanced animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links with staggered animations */}
          <motion.div 
            className="flex justify-center space-x-6 pt-8"
            variants={itemVariants}
          >
            {[
              { href: "https://github.com/sh7verma", icon: <Github className="w-6 h-6" />, testId: "link-github" },
              { href: "https://www.linkedin.com/in/shubham-verma-670818173/", icon: <Linkedin className="w-6 h-6" />, testId: "link-linkedin" },
              { href: "mailto:shubham.verma740@gmail.com", icon: <Mail className="w-6 h-6" />, testId: "link-email" }
            ].map((social, index) => (
              <motion.a
                key={social.testId}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                data-testid={social.testId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Professional stats bar */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8 border-t border-border/20"
            variants={itemVariants}
          >
            {[
              { number: "8+", label: "Years Experience" },
              { number: "50+", label: "Apps Built" },
              { number: "15+", label: "AI Projects" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + (index * 0.15), duration: 0.5 }}
                data-testid={`hero-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
