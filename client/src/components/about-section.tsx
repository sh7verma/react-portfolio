import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="about-subtitle">
            Passionate about creating exceptional mobile experiences with cutting-edge AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 intersection-animate">
            <h3 className="text-2xl font-semibold" data-testid="journey-title">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="journey-p1">
              With over 8 years in mobile development, I've specialized in building sophisticated Android applications 
              that leverage AI and machine learning capabilities. My experience spans across fintech, media streaming, 
              and enterprise solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="journey-p2">
              I'm passionate about creating privacy-first applications with on-device AI processing, ensuring user 
              data remains secure while delivering intelligent features.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="badge-experience">8+ Years Experience</span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium" data-testid="badge-ai">AI Integration Expert</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium" data-testid="badge-fintech">Fintech Specialist</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 intersection-animate">
            <Card className="card-hover" data-testid="stat-apps">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Apps Developed</div>
              </CardContent>
            </Card>
            <Card className="card-hover" data-testid="stat-ai">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </CardContent>
            </Card>
            <Card className="card-hover" data-testid="stat-companies">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </CardContent>
            </Card>
            <Card className="card-hover" data-testid="stat-satisfaction">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
