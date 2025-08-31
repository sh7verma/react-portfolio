import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import resumePdf from "@assets/ShubhamVerma-Resume_1756539230700.pdf";
import { 
  MotionDiv, 
  MotionH2, 
  MotionH3, 
  MotionP, 
  MotionSpan, 
  MotionA,
  scrollReveal,
  staggerContainer,
  staggerItem,
  hoverLift,
  hoverGlow
} from "@/components/ui/motion";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-primary mx-auto mb-4" />,
      title: "Email",
      value: "shubham.verma740@gmail.com",
      href: "mailto:shubham.verma740@gmail.com"
    },
    {
      icon: <Github className="w-8 h-8 text-primary mx-auto mb-4" />,
      title: "GitHub",
      value: "github.com/sh7verma",
      href: "https://github.com/sh7verma"
    },
    {
      icon: <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />,
      title: "LinkedIn",
      value: "linkedin.com/in/shubham-verma",
      href: "https://www.linkedin.com/in/shubham-verma-670818173/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionDiv 
          variants={scrollReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-8" 
            data-testid="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Work Together
          </MotionH2>
          <MotionP 
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" 
            data-testid="contact-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your mobile app ideas to life.
          </MotionP>
        </MotionDiv>

        <MotionDiv 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactMethods.map((method, index) => (
            <MotionA
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-card p-6 rounded-xl border border-border card-hover block"
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              data-testid={`contact-${method.title.toLowerCase()}`}
            >
              <MotionSpan
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  color: "hsl(var(--primary))"
                }}
                transition={{ duration: 0.3 }}
              >
                {method.icon}
              </MotionSpan>
              <MotionH3 
                className="font-semibold mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {method.title}
              </MotionH3>
              <MotionP 
                className="text-muted-foreground text-sm"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {method.value}
              </MotionP>
            </MotionA>
          ))}
        </MotionDiv>

        <MotionDiv 
          className="text-center"
          variants={scrollReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          <MotionA 
            href={resumePdf}
            download="ShubhamVerma-Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-download-resume"
          >
            <MotionSpan
              className="w-5 h-5 mr-2"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Download />
            </MotionSpan>
            Download Resume
          </MotionA>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactSection;
