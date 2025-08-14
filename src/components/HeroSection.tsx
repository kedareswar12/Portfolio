import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const roles = [
    'Full Stack Developer',
    'ML Engineer', 
    'DevOps Enthusiast'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentRole.length) {
          setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating 3D Logos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 rotate-3d float">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-2xl font-bold text-background">
            ⚛
          </div>
        </div>
        <div className="absolute top-32 right-32 rotate-3d float-delayed">
          <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center text-xl font-bold text-background">
            🐳
          </div>
        </div>
        <div className="absolute bottom-32 left-32 rotate-3d float">
          <div className="w-14 h-14 bg-neon-green/20 rounded-xl flex items-center justify-center text-2xl border border-neon-green">
            🐍
          </div>
        </div>
        <div className="absolute bottom-20 right-20 rotate-3d float-delayed">
          <div className="w-16 h-16 bg-neon-purple/20 rounded-lg flex items-center justify-center text-2xl border border-neon-purple">
            🧠
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="gradient-text">Alex</span>{' '}
            <span className="neon-cyan">Developer</span>
          </h1>
          
          <div className="h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-muted-foreground mr-2">
              {typewriterText}
            </span>
            <span className="w-0.5 h-6 bg-neon-cyan animate-pulse"></span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting innovative digital experiences with cutting-edge technologies. 
            Specializing in full-stack development, machine learning, and cloud infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="glass-card hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 bg-gradient-primary border-0 text-background font-semibold"
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:shadow-neon-purple hover:scale-105 transition-all duration-300 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:shadow-neon-green hover:scale-105 transition-all duration-300 border-neon-green text-neon-green hover:bg-neon-green hover:text-background"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-neon-cyan" />
      </div>
    </section>
  );
};

export default HeroSection;