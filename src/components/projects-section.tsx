import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { 
  MotionDiv, 
  MotionH2, 
  MotionH3,
  MotionP, 
  MotionSpan, 
  MotionButton,
  MotionImg,
  scrollReveal,
  staggerContainer,
  staggerItem,
  hoverLift,
  hoverGlow
} from "@/components/ui/motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dating App",
      description: "Modern dating application with swipe functionality, real-time messaging, and location-based matching using Firebase and Google Maps API.",
      technologies: ["Kotlin", "Firebase", "Google Maps", "Real-time DB"],
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Dating app interface with modern design"
    },
    {
      title: "E-commerce App",
      description: "Full-featured shopping application with product catalog, cart management, payment integration, and order tracking.",
      technologies: ["Kotlin", "Room", "Payment Gateway", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "E-commerce mobile app shopping interface"
    },
    {
      title: "JournalAI App",
      description: "AI-powered journaling app with sentiment analysis, mood tracking, and intelligent writing suggestions using on-device ML models.",
      technologies: ["Kotlin", "TFLite", "ML Kit", "Room"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "AI journaling app with smart features"
    },
    {
      title: "Health App (Practo-like)",
      description: "Comprehensive healthcare platform with doctor booking, telemedicine, health records, and appointment management system.",
      technologies: ["Kotlin", "WebRTC", "Firebase", "Maps API"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Healthcare app interface with doctor consultation"
    },
    {
      title: "Uber-type App",
      description: "On-demand ride-sharing application with real-time tracking, driver matching, payment integration, and route optimization.",
      technologies: ["Kotlin", "Google Maps", "Firebase", "Payment API"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Ride-sharing app with map and tracking features"
    },
    {
      title: "Offline Caption Generator",
      description: "On-device image captioning powered by TFLite and ONNX, runs fully offline ensuring complete privacy.",
      technologies: ["TFLite", "ONNX", "CameraX"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "AI camera interface for image recognition"
    },
    {
      title: "Enterprise Video Calling UX",
      description: "Custom UI for call integration using Chime SDK + ConnectionService for enterprise-grade communication.",
      technologies: ["Chime SDK", "ConnectionService", "Custom UI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Professional video calling interface"
    },
    {
      title: "YouTube Shorts Automator",
      description: "Complete automation pipeline using Python, GPT, and YouTube API to automate video uploads and intelligent title generation for content creators.",
      technologies: ["Python", "GPT API", "YouTube API", "Automation"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "YouTube automation interface with content pipeline",
      span: "md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv 
          className="text-center mb-16"
          variants={scrollReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <MotionH2 
            className="text-4xl md:text-5xl font-bold mb-4" 
            data-testid="projects-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </MotionH2>
          <MotionP 
            className="text-xl text-muted-foreground" 
            data-testid="projects-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my most impactful work
          </MotionP>
        </MotionDiv>

        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              className={`card-hover overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 ${project.span || ''}`}
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative overflow-hidden">
                <MotionImg 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <MotionDiv 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <CardContent className="p-6 bg-card">
                <MotionH3 
                  className="text-xl font-bold mb-3 text-foreground" 
                  data-testid={`project-title-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {project.title}
                </MotionH3>
                <MotionP 
                  className="text-muted-foreground mb-4 leading-relaxed" 
                  data-testid={`project-description-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  {project.description}
                </MotionP>
                <MotionDiv 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <MotionSpan
                      key={tech}
                      className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium border border-primary/20"
                      variants={staggerItem}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                      }}
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </MotionSpan>
                  ))}
                </MotionDiv>
                <MotionButton 
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 group bg-transparent border-none p-0" 
                  data-testid={`project-link-${index}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project 
                  <MotionSpan
                    className="w-4 h-4"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink />
                  </MotionSpan>
                </MotionButton>
              </CardContent>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default ProjectsSection;
