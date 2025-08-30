import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Sr. Android Developer",
      company: "Recro, Bengaluru",
      period: "November 2022 — Present",
      responsibilities: [
        "Working on banking applications for clients, such as LMS (Loan Management System) and collection systems, using Android development, Java, and Kotlin.",
        "Integrated Google Map Api and Place Api, Map My India, realm, and room for comprehensive location services.",
        "Worked on multi-module architecture using MVVM for scalable application design.",
        "Implemented data security, memory optimization techniques, and battery consumption optimization."
      ],
      tags: ["Banking Apps", "Multi-module", "MVVM", "Security"]
    },
    {
      title: "Sr. Android Developer",
      company: "Perseverance IT Solution Pvt.Ltd, Delhi",
      period: "November 2021 — October 2022",
      responsibilities: [
        "Developed TV and OTT applications using Java, Kotlin, and Exoplayer for rich media experiences.",
        "Utilized Exoplayer to develop advanced features such as adaptive streaming, offline playback, and live streaming.",
        "Implemented Google Analytics for comprehensive user behavior tracking.",
        "Developed apps using Kotlin Coroutines and Mp Android Chart for enhanced performance."
      ],
      tags: ["OTT Apps", "ExoPlayer", "Streaming", "Analytics"]
    },
    {
      title: "Android Developer (Freelancer)",
      company: "Chandigarh",
      period: "August 2020 — November 2021",
      responsibilities: [
        "Worked on multiple Android, Java, and Kotlin-based projects for diverse clients.",
        "Worked on Tensorflow for Image classifications and AI-powered features.",
        "Gained experience in image and video processing using the ffmpeg library.",
        "Followed best practices for software development, including Agile methodologies, Git, and Jira."
      ],
      tags: ["Freelance", "TensorFlow", "FFmpeg", "Agile"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="experience-title">Experience</h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
            My professional journey in mobile development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover intersection-animate" data-testid={`experience-${index}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold" data-testid={`exp-title-${index}`}>{exp.title}</h3>
                    <p className="text-lg text-primary font-medium" data-testid={`exp-company-${index}`}>{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground font-medium" data-testid={`exp-period-${index}`}>
                    {exp.period}
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <p key={respIndex} data-testid={`exp-resp-${index}-${respIndex}`}>• {responsibility}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index === 0 ? 'bg-primary/10 text-primary' :
                        index === 1 ? 'bg-accent/10 text-accent' :
                        'bg-secondary text-secondary-foreground'
                      }`}
                      data-testid={`exp-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tag}
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

export default ExperienceSection;
