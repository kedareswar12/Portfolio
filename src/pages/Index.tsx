import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cpu, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const roles = [
    'Software Engineer',
    'Full Stack Developer', 
    'DevOps Engineer',
    'AI Enthusiast'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text-clean">Kedareswar</span>
              <br />
              <span className="accent-blue">Tiruveedi</span>
            </h1>
            
            <div className="h-12 flex items-center justify-center mb-8">
              <span className="text-xl md:text-2xl text-muted-foreground mr-2">
                {typewriterText}
              </span>
              <span className="w-0.5 h-6 bg-primary animate-pulse"></span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate software engineer specializing in Java, C++, Python development, 
              cloud infrastructure with AWS, and emerging AI technologies. 
              Building scalable solutions and exploring the future of technology.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent-green text-accent-green hover:bg-accent-green hover:text-background"
                >
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-background"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="clean-card text-center fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code className="h-8 w-8 accent-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 accent-blue">Software Development</h3>
              <p className="text-muted-foreground">
                Proficient in Java, C++, Python with experience in building robust applications and algorithms.
              </p>
            </div>

            <div className="clean-card text-center fade-in-delay">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-green/10 rounded-xl flex items-center justify-center">
                <Cloud className="h-8 w-8 accent-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 accent-green">Cloud & DevOps</h3>
              <p className="text-muted-foreground">
                Learning AWS cloud services and DevOps practices for scalable and reliable deployments.
              </p>
            </div>

            <div className="clean-card text-center fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-purple/10 rounded-xl flex items-center justify-center">
                <Cpu className="h-8 w-8 accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 accent-purple">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Exploring Generative AI, Computer Vision, and Machine Learning concepts to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;