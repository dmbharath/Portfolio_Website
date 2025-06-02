
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, education, and passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image/Visual */}
            <div className="animate-on-scroll">
              <Card className="glass-card p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-blue-400/20 flex items-center justify-center">
                    <div className="text-6xl gradient-text font-bold">
                      &lt;/&gt;
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Code Enthusiast</h3>
                <p className="text-muted-foreground">
                  Passionate about crafting elegant solutions to complex problems
                </p>
              </Card>
            </div>

            {/* Right side - Content */}
            <div className="animate-on-scroll">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a self-taught software developer with a passion for creating seamless user experiences. 
                    Currently pursuing my Bachelor's in Computer Applications at East Point College of Higher 
                    Education, Bangalore, graduating in 2025.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in tech began with curiosity and has evolved into a deep commitment to 
                    continuous learning and innovation. I believe in the power of technology to solve 
                    real-world problems and create meaningful impact.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Education</h4>
                  <Card className="glass-card p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-semibold">Bachelor of Computer Applications</h5>
                        <p className="text-muted-foreground">East Point College of Higher Education, Bangalore</p>
                        <p className="text-sm text-primary">2022 - 2025 (Expected)</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">What Drives Me</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Problem-solving with creative thinking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Continuous learning and growth</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Design thinking and user experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Building technology that matters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
