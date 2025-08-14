import { useState, useEffect, useRef } from 'react';
import { Calendar, Code, Database, Cloud, Brain, Zap } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  technologies: string[];
  icon: any;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2019',
    title: 'Started Programming Journey',
    description: 'Began learning web development fundamentals with HTML, CSS, and JavaScript. Built first portfolio website.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
    icon: Code,
    color: 'neon-cyan'
  },
  {
    id: 2,
    year: '2020',
    title: 'Full Stack Development',
    description: 'Mastered React and Node.js. Developed first full-stack application with user authentication and database integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: Database,
    color: 'neon-purple'
  },
  {
    id: 3,
    year: '2021',
    title: 'Cloud & DevOps',
    description: 'Dove into cloud computing and containerization. Deployed applications on AWS and implemented CI/CD pipelines.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    icon: Cloud,
    color: 'neon-green'
  },
  {
    id: 4,
    year: '2022',
    title: 'Machine Learning',
    description: 'Explored AI and machine learning. Built recommendation systems and computer vision applications using Python.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
    icon: Brain,
    color: 'neon-pink'
  },
  {
    id: 5,
    year: '2023',
    title: 'Senior Developer',
    description: 'Leading development teams and architecting scalable solutions. Mentoring junior developers and driving innovation.',
    technologies: ['Architecture', 'Leadership', 'Microservices', 'Performance'],
    icon: Zap,
    color: 'neon-cyan'
  }
];

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 px-4" id="journey">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Coding</span>{' '}
            <span className="neon-green">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my growth as a developer, from first lines of code to leading technical teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-green"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                ref={el => observerRefs.current[index] = el}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-${item.color} shadow-${item.color.replace('neon-', 'neon-')} z-10`}></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card group hover:shadow-neon-cyan transition-all duration-500">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-${item.color}/20 text-${item.color} border border-${item.color}/30 mb-4`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.year}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 border border-${item.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 text-${item.color}`} />
                    </div>

                    {/* Title & Description */}
                    <h3 className={`text-xl font-bold text-${item.color} mb-3`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-full bg-${item.color}/10 border border-${item.color}/30 text-${item.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mt-20 glass-card">
          <h3 className="text-2xl font-bold neon-cyan mb-8 text-center">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Frontend Development', level: 95, color: 'neon-cyan' },
              { skill: 'Backend Development', level: 90, color: 'neon-purple' },
              { skill: 'DevOps & Cloud', level: 85, color: 'neon-green' },
              { skill: 'Machine Learning', level: 80, color: 'neon-pink' }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className={`text-${item.color} font-bold`}>{item.level}%</span>
                </div>
                <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${item.color} rounded-full transition-all duration-1000 ease-out animate-pulse-neon`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;