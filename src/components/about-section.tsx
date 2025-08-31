import { Card, CardContent } from "@/components/ui/card";
import { 
  MotionDiv, 
  MotionH2, 
  MotionH3, 
  MotionP, 
  MotionSpan,
  scrollReveal,
  scrollRevealLeft,
  scrollRevealRight,
  staggerContainer,
  staggerItem,
  hoverLift
} from "@/components/ui/motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
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
            data-testid="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </MotionH2>
          <MotionP 
            className="text-xl text-muted-foreground max-w-2xl mx-auto" 
            data-testid="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate about creating exceptional mobile experiences with cutting-edge AI integration
          </MotionP>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv 
            className="space-y-6"
            variants={scrollRevealLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <MotionH3 
              className="text-2xl font-semibold" 
              data-testid="journey-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Journey
            </MotionH3>
            <MotionP 
              className="text-muted-foreground leading-relaxed" 
              data-testid="journey-p1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              With over 8 years in mobile development, I've specialized in building sophisticated Android applications 
              that leverage AI and machine learning capabilities. My experience spans across fintech, media streaming, 
              and enterprise solutions.
            </MotionP>
            <MotionP 
              className="text-muted-foreground leading-relaxed" 
              data-testid="journey-p2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm passionate about creating privacy-first applications with on-device AI processing, ensuring user 
              data remains secure while delivering intelligent features.
            </MotionP>
            
            <MotionDiv 
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
            >
              {[
                { text: "8+ Years Experience", testId: "badge-experience", className: "px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium" },
                { text: "AI Integration Expert", testId: "badge-ai", className: "px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium" },
                { text: "Fintech Specialist", testId: "badge-fintech", className: "px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium" }
              ].map((badge, index) => (
                <MotionSpan
                  key={badge.text}
                  className={badge.className}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                  }}
                  data-testid={badge.testId}
                >
                  {badge.text}
                </MotionSpan>
              ))}
            </MotionDiv>
          </MotionDiv>

          <MotionDiv 
            className="grid grid-cols-2 gap-6"
            variants={scrollRevealRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: "50+", label: "Apps Developed", testId: "stat-apps", color: "text-primary" },
              { number: "15+", label: "AI Projects", testId: "stat-ai", color: "text-accent" },
              { number: "5+", label: "Companies", testId: "stat-companies", color: "text-primary" },
              { number: "100%", label: "Client Satisfaction", testId: "stat-satisfaction", color: "text-accent" }
            ].map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="card-hover"
                variants={hoverLift}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                data-testid={stat.testId}
              >
                <CardContent className="p-6">
                  <MotionDiv 
                    className={`text-3xl font-bold mb-2 ${stat.color}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.number}
                  </MotionDiv>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
