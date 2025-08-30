import { DollarSign, PlayCircle, Brain, MapPin, ShoppingBag, Video } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Fintech",
      description: "LMS, reconciliation tools, payment dashboards",
      color: "primary"
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-accent" />,
      title: "Media",
      description: "OTT & TV apps, ExoPlayer, offline playback",
      color: "accent"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Integration",
      description: "On-device captioning, face detection, summarization",
      color: "primary"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Mapping",
      description: "Google Maps, MapMyIndia integration",
      color: "accent"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: "Product",
      description: "E-commerce, dating apps, ride-sharing solutions",
      color: "primary"
    },
    {
      icon: <Video className="w-8 h-8 text-accent" />,
      title: "Media Utils",
      description: "Video/audio compression using FFmpeg",
      color: "accent"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="expertise-title">Expertise Areas</h2>
          <p className="text-xl text-muted-foreground" data-testid="expertise-subtitle">
            Specialized knowledge across different industry verticals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div key={area.title} className="text-center p-6 intersection-animate" data-testid={`expertise-${area.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                area.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
              }`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid={`expertise-title-${area.title.toLowerCase().replace(/\s+/g, '-')}`}>{area.title}</h3>
              <p className="text-muted-foreground" data-testid={`expertise-desc-${area.title.toLowerCase().replace(/\s+/g, '-')}`}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
