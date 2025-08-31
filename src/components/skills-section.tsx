import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Brain, Server, Settings } from "lucide-react";
import { 
  MotionDiv, 
  MotionH2, 
  MotionH3, 
  MotionP, 
  MotionSpan,
  scrollReveal,
  staggerContainer,
  staggerItem,
  hoverLift,
  hoverGlow
} from "@/components/ui/motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8 text-accent mr-3" />,
      title: "Android",
      skills: ["Kotlin", "Jetpack Compose", "Hilt", "Coroutines", "Room", "WorkManager"],
      color: "primary"
    },
    {
      icon: <Brain className="w-8 h-8 text-accent mr-3" />,
      title: "AI on Mobile",
      skills: ["TFLite", "ML Kit", "ONNX", "CameraX"],
      color: "accent"
    },
    {
      icon: <Server className="w-8 h-8 text-accent mr-3" />,
      title: "Backend",
      skills: ["FastAPI", "MySQL", "Ktor"],
      color: "secondary"
    },
    {
      icon: <Settings className="w-8 h-8 text-accent mr-3" />,
      title: "DevOps",
      skills: ["GitHub Actions", "Play Console", "CI/CD"],
      color: "muted"
    }
  ];

  return (
    <section id="skills" className="section-padding">
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
            data-testid="skills-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </MotionH2>
          <MotionP 
            className="text-xl text-muted-foreground" 
            data-testid="skills-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My technical expertise across different domains
          </MotionP>
        </MotionDiv>

        <MotionDiv 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <MotionDiv
              key={category.title}
              className="card-hover"
              variants={staggerItem}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(' ', '-')}`}
            >
              <CardContent className="p-6">
                <MotionDiv 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MotionSpan
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      color: "hsl(var(--accent))"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.icon}
                  </MotionSpan>
                  <MotionH3 
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  >
                    {category.title}
                  </MotionH3>
                </MotionDiv>
                <MotionDiv 
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <MotionSpan
                      key={skill}
                      className={`skill-tag inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                        category.color === 'primary' ? 'bg-primary/10 text-primary' :
                        category.color === 'accent' ? 'bg-accent/10 text-accent' :
                        category.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}
                      variants={staggerItem}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                      }}
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </MotionSpan>
                  ))}
                </MotionDiv>
              </CardContent>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default SkillsSection;
