
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bharath_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="animate-fade-in-up">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-2xl">
                <AvatarImage 
                  src="\Bharath_Profile_Photo.jpg" 
                  alt="D M Bharath"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-primary/10">DB</AvatarFallback>
              </Avatar>
            </div>

            <p className="text-primary font-medium mb-4 text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">D M Bharath</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              A self-taught software developer passionate about building seamless user experiences 
              through strong full-stack development skills and creative design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={downloadResume}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                Download Resume
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-16">
              <a
                href="https://github.com/dmbharath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/d-m-bharath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/bharathdm2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="text-muted-foreground hover:text-primary transition-colors" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
