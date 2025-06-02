
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Angular", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Servlets", "JDBC", "JSP"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "SQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe Photoshop", "Canva"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const techStack = [
    "JavaScript", "Java", "Spring Boot", "Angular", "MySQL", "PostgreSQL", 
    "Node.js", "TailwindCSS", "Figma", "Adobe Photoshop"
  ];

  return (
    <div className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools use to bring ideas to life
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tech Stack Cloud */}
          <div className="text-center animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-8">Technologies Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-16 animate-on-scroll">
            <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Problem Solving",
                  description: "Analytical thinking to break down complex challenges into manageable solutions"
                },
                {
                  title: "Continuous Learning",
                  description: "Staying updated with the latest technologies and best practices in development"
                },
                {
                  title: "Design Thinking",
                  description: "User-centered approach to create intuitive and engaging experiences"
                }
              ].map((competency, index) => (
                <Card key={competency.title} className="glass-card p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3 gradient-text">{competency.title}</h4>
                  <p className="text-muted-foreground">{competency.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
