
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Orwellian AI",
      description: "A sophisticated fake link detector that analyzes URLs and provides detailed information including risk scores, domain status, and safety assessments. Built with modern web technologies for real-time analysis.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80",
      technologies: ["TailwindCSS", "JavaScript", "Node.js", "Flask", "AI/ML"],
      liveDemo: "#",
      github: "https://github.com/dmbharath",
      featured: true
    },
    {
      title: "Velocita",
      description: "A real-time ambulance alert system that notifies relevant areas when an ambulance picks up a patient. Designed to improve emergency response times and coordination.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80",
      technologies: ["Java", "Spring Boot", "MySQL", "Real-time APIs"],
      liveDemo: "#",
      github: "https://github.com/dmbharath",
      featured: true
    },
  ];

  return (
    <div className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-on-scroll ${
                  project.featured ? 'border-primary/30' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-video md:aspect-square">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Github size={16} />
                          <span>View Code</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://github.com/dmbharath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github size={20} />
                <span>Visit GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
