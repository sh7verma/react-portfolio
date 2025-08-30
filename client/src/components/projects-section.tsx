import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

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
        <div className="text-center mb-16 intersection-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground" data-testid="projects-subtitle">
            A showcase of my most impactful work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={`card-hover intersection-animate overflow-hidden ${project.span || ''}`} data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <img 
                src={project.image} 
                alt={project.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${index}`}>{project.title}</h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-primary hover:text-primary/80 font-medium flex items-center gap-2" data-testid={`project-link-${index}`}>
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
