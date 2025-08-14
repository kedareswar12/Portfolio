import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import webProject from '@/assets/project-web.jpg';
import dockerProject from '@/assets/project-docker.jpg';
import mlProject from '@/assets/project-ml.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'docker' | 'ml';
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features real-time inventory, payment integration, and admin dashboard.',
    image: webProject,
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    metrics: [
      { label: 'Users', value: '2.5K+' },
      { label: 'Performance', value: '95/100' }
    ]
  },
  {
    id: 2,
    title: 'Microservices Architecture',
    description: 'Containerized microservices deployment with Docker, Kubernetes, and CI/CD pipeline. Auto-scaling and monitoring included.',
    image: dockerProject,
    category: 'docker',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana'],
    liveUrl: '#',
    githubUrl: '#',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Containers', value: '50+' }
    ]
  },
  {
    id: 3,
    title: 'AI Recommendation Engine',
    description: 'Machine learning model for personalized recommendations using TensorFlow and Python. Deployed on AWS with real-time inference.',
    image: mlProject,
    category: 'ml',
    technologies: ['Python', 'TensorFlow', 'AWS', 'FastAPI', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    metrics: [
      { label: 'Accuracy', value: '94.2%' },
      { label: 'Latency', value: '<100ms' }
    ]
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'docker' | 'ml'>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects', color: 'neon-cyan' },
    { id: 'web', label: 'Web Development', color: 'neon-purple' },
    { id: 'docker', label: 'DevOps', color: 'neon-green' },
    { id: 'ml', label: 'Machine Learning', color: 'neon-pink' }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured</span>{' '}
            <span className="neon-purple">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work showcasing modern web technologies, cloud infrastructure, and AI solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id as any)}
              className={`glass-card transition-all duration-300 ${
                activeCategory === category.id 
                  ? `bg-gradient-primary text-background shadow-neon-cyan` 
                  : `border-${category.color} text-${category.color} hover:bg-${category.color} hover:text-background`
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card group cursor-pointer animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-neon-cyan text-background hover:bg-neon-cyan/80">
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-background">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold neon-cyan">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-muted/20 border border-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex gap-4 pt-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg font-bold neon-green">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary text-background hover:shadow-neon-cyan transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;