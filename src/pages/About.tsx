import { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Code, 
  Brain, 
  Cloud, 
  Database, 
  Monitor,
  Cpu,
  Globe,
  Award,
  BookOpen
} from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const skills = {
    'Programming Languages': [
      { name: 'Java', level: 85, icon: '☕' },
      { name: 'C++', level: 80, icon: '⚡' },
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'JavaScript', level: 75, icon: '🌐' },
      { name: 'SQL', level: 70, icon: '💾' }
    ],
    'Technologies & Frameworks': [
      { name: 'React', level: 75, icon: '⚛️' },
      { name: 'Node.js', level: 70, icon: '🟢' },
      { name: 'Spring Boot', level: 65, icon: '🍃' },
      { name: 'AWS', level: 60, icon: '☁️' },
      { name: 'Docker', level: 55, icon: '🐳' }
    ],
    'AI & ML': [
      { name: 'Machine Learning', level: 65, icon: '🤖' },
      { name: 'Computer Vision', level: 60, icon: '👁️' },
      { name: 'Generative AI', level: 55, icon: '✨' },
      { name: 'TensorFlow', level: 50, icon: '🧠' },
      { name: 'OpenCV', level: 58, icon: '📷' }
    ]
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          className={`text-center mb-16 ${visibleSections.includes(0) ? 'fade-in' : 'opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-clean">About</span>{' '}
            <span className="accent-blue">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology, continuous learning, and building innovative solutions
          </p>
        </div>

        {/* Personal Introduction */}
        <div 
          ref={el => sectionRefs.current[1] = el}
          className={`mb-20 ${visibleSections.includes(1) ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <User className="h-6 w-6 accent-blue" />
                </div>
                <h2 className="text-2xl font-bold accent-blue">Who I Am</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm Kedareswar Tiruveedi, a passionate software engineer with a strong foundation 
                  in multiple programming languages and emerging technologies. I love solving complex 
                  problems and building scalable solutions that make a difference.
                </p>
                <p>
                  Currently expanding my expertise in cloud computing with AWS and exploring the 
                  fascinating world of Artificial Intelligence. I believe in continuous learning 
                  and staying updated with the latest technological advancements.
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open-source projects, learning about 
                  new technologies, and sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 accent-green" />
                </div>
                <h2 className="text-2xl font-bold accent-green">What I Do</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Code className="h-5 w-5 accent-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Software Development</h4>
                    <p className="text-sm text-muted-foreground">Building robust applications using Java, C++, and Python</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cloud className="h-5 w-5 accent-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Cloud & DevOps</h4>
                    <p className="text-sm text-muted-foreground">Learning AWS services and DevOps best practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 accent-purple mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">AI & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">Exploring Generative AI, Computer Vision, and ML concepts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 accent-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Full Stack Development</h4>
                    <p className="text-sm text-muted-foreground">Creating end-to-end web applications and APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div 
          ref={el => sectionRefs.current[2] = el}
          className={`mb-20 ${visibleSections.includes(2) ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text-clean">Technical</span>{' '}
              <span className="accent-purple">Skills</span>
            </h2>
            <p className="text-muted-foreground">
              Technologies I work with and continuously improving upon
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="clean-card">
                <h3 className="text-xl font-semibold mb-6 accent-blue">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent-green rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: visibleSections.includes(2) ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.1 + skillList.indexOf(skill) * 0.05}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div 
          ref={el => sectionRefs.current[3] = el}
          className={`${visibleSections.includes(3) ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text-clean">Journey</span>{' '}
              <span className="accent-green">& Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 accent-purple" />
                </div>
                <h3 className="text-xl font-bold accent-purple">Learning Path</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4 pb-4">
                  <h4 className="font-semibold text-foreground">Programming Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">Started with C++ and Java, building strong algorithmic thinking</p>
                </div>
                <div className="border-l-2 border-accent-green/30 pl-4 pb-4">
                  <h4 className="font-semibold text-foreground">Web Development</h4>
                  <p className="text-sm text-muted-foreground">Expanded into full-stack development with modern frameworks</p>
                </div>
                <div className="border-l-2 border-accent-purple/30 pl-4 pb-4">
                  <h4 className="font-semibold text-foreground">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground">Currently learning AWS and DevOps practices</p>
                </div>
                <div className="border-l-2 border-accent-orange/30 pl-4">
                  <h4 className="font-semibold text-foreground">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">Exploring the future of technology with AI and ML</p>
                </div>
              </div>
            </div>

            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mr-4">
                  <Monitor className="h-6 w-6 accent-green" />
                </div>
                <h3 className="text-xl font-bold accent-green">Current Focus</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-muted/30">
                  <h4 className="font-semibold text-foreground mb-2">🎯 Immediate Goals</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Obtaining AWS certifications</li>
                    <li>• Building production-ready applications</li>
                    <li>• Contributing to open-source projects</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-muted/30">
                  <h4 className="font-semibold text-foreground mb-2">🚀 Long-term Vision</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Specializing in AI/ML solutions</li>
                    <li>• Leading technical teams</li>
                    <li>• Building innovative products</li>
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