
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern technologies like Angular, Spring Boot, and databases.",
      features: ["Responsive Design", "Modern UI/UX", "Database Integration", "API Development"],
      icon: "🌐"
    },
    {
      title: "Backend API Development",
      description: "Robust and scalable backend services using Spring Boot, handling data management and business logic.",
      features: ["RESTful APIs", "Database Design", "Security Implementation", "Performance Optimization"],
      icon: "⚙️"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces using Figma, Photoshop, and modern design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      icon: "🎨"
    },
    {
      title: "Database Design & Integration",
      description: "Efficient database architecture and integration with applications using MySQL, PostgreSQL, and JDBC.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Tuning"],
      icon: "🗄️"
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to bring your digital ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 group animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                      Let's discuss your project needs
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20 animate-on-scroll">
            <h3 className="text-3xl font-semibold text-center mb-12">
              My <span className="gradient-text">Process</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
                { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
                { step: "03", title: "Development", description: "Building with modern technologies" },
                { step: "04", title: "Delivery", description: "Testing, deployment, and support" }
              ].map((process, index) => (
                <div key={process.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
