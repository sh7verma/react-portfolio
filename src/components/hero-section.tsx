import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { 
  MotionDiv, 
  MotionH1, 
  MotionH2, 
  MotionP, 
  MotionSpan, 
  MotionButton, 
  MotionA,
  fadeInUp, 
  fadeInDown, 
  staggerContainer, 
  staggerItem, 
  hoverScale, 
  hoverLift,
  textReveal,
  letterReveal
} from "@/components/ui/motion";

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

  // Animated text component
  const AnimatedText = ({ text, className }: { text: string; className: string }) => (
    <MotionH1 className={className} data-testid="hero-name">
      {text.split(' ').map((word, wordIndex) => (
        <MotionDiv
          key={wordIndex}
          className="block md:inline-block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: wordIndex * 0.3,
            ease: "easeOut"
          }}
        >
          {word.split('').map((char, charIndex) => (
            <MotionSpan
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: wordIndex * 0.3 + charIndex * 0.05,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {char}
            </MotionSpan>
          ))}
          {wordIndex < text.split(' ').length - 1 && (
            <span className="hidden md:inline-block">&nbsp;</span>
          )}
        </MotionDiv>
      ))}
    </MotionH1>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section">
      <MotionDiv 
        className="absolute inset-0 hero-gradient opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv 
          className="text-center space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <MotionDiv className="space-y-6" variants={staggerItem}>
            <AnimatedText 
              text="Shubham Verma" 
              className="text-6xl md:text-8xl font-bold text-foreground"
            />
            <MotionH2 
              className="text-2xl md:text-4xl text-muted-foreground font-medium"
              variants={fadeInUp}
              data-testid="hero-title"
            >
              Mobile App Developer – Android & AI
            </MotionH2>
          </MotionDiv>

          <MotionDiv className="space-y-6" variants={staggerItem}>
            <MotionP 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={textReveal}
              data-testid="hero-description"
            >
              Senior developer with <MotionSpan 
                className="text-primary font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >8+ years</MotionSpan> of experience building fast, privacy-first Android apps using 
              cutting-edge technologies.
            </MotionP>
            
            <MotionDiv 
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {["Kotlin", "Jetpack Compose", "TFLite", "ML Kit", "Room", "Firebase"].map((tech, index) => (
                <MotionSpan
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -2 }}
                  data-testid={`tech-highlight-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tech}
                </MotionSpan>
              ))}
            </MotionDiv>
          </MotionDiv>

          <MotionDiv 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={staggerItem}
          >
            <MotionButton
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              variants={hoverLift}
              data-testid="button-view-work"
            >
              View My Work
            </MotionButton>
            <MotionButton
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              variants={hoverScale}
              data-testid="button-contact"
            >
              Get In Touch
            </MotionButton>
          </MotionDiv>

          <MotionDiv 
            className="flex justify-center space-x-6 pt-8"
            variants={staggerContainer}
          >
            {[
              { icon: Github, href: "https://github.com/sh7verma", testId: "link-github" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-verma-670818173/", testId: "link-linkedin" },
              { icon: Mail, href: "mailto:shubham.verma740@gmail.com", testId: "link-email" }
            ].map((social, index) => (
              <MotionA
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                data-testid={social.testId}
              >
                <social.icon className="w-6 h-6" />
              </MotionA>
            ))}
          </MotionDiv>

          <MotionDiv 
            className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8 border-t border-border/20"
            variants={staggerContainer}
          >
            {[
              { number: "8+", label: "Years Experience" },
              { number: "50+", label: "Apps Built" },
              { number: "15+", label: "AI Projects" }
            ].map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
                data-testid={`hero-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <MotionDiv 
                  className="text-2xl md:text-3xl font-bold text-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 2 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </MotionDiv>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
