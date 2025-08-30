import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Brain, Server, Settings } from "lucide-react";

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
        <div className="text-center mb-16 intersection-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="skills-title">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
            My technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-hover intersection-animate" data-testid={`skill-category-${category.title.toLowerCase().replace(' ', '-')}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                        category.color === 'primary' ? 'bg-primary/10 text-primary' :
                        category.color === 'accent' ? 'bg-accent/10 text-accent' :
                        category.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
