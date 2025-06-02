
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      label: "Email",
      value: "dmbharath2002@gmail.com",
      href: "mailto:dmbharath2002@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 97317 84368",
      href: "tel:+919731784368"
    },
    {
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dmbharath",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/d-m-bharath",
      icon: Linkedin
    },
    {
      name: "Twitter",
      url: "https://x.com/bharathdm2002",
      icon: Twitter
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card p-8 animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-4">Let's collaborate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a specific project in mind or just want to connect, 
                  feel free to reach out. I'd love to hear from you!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 D M Bharath.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
