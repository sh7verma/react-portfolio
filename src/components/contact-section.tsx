import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import resumePdf from "@assets/ShubhamVerma-Resume_1756539230700.pdf";

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
        <div className="intersection-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="contact-title">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your mobile app ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-card p-6 rounded-xl border border-border card-hover block intersection-animate"
              data-testid={`contact-${method.title.toLowerCase()}`}
            >
              {method.icon}
              <h3 className="font-semibold mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="text-center intersection-animate">
          <a 
            href={resumePdf}
            download="ShubhamVerma-Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            data-testid="button-download-resume"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
