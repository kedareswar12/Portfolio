import { useState } from 'react';
import { ExternalLink, Github, Play, Calendar, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import webProject from '@/assets/project-web.jpg';
import dockerProject from '@/assets/project-docker.jpg';
import mlProject from '@/assets/project-ml.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'backend' | 'ai' | 'devops';
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Learning Platform',
    description: 'Full-stack web application built with React and Spring Boot. Features user authentication, course management, video streaming, and progress tracking.',
    image: webProject,
    category: 'web',
    technologies: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    githubUrl: '#',
    liveUrl: '#',
    status: 'completed',
    highlights: [
      'Responsive design with modern UI',
      'Secure user authentication',
      'Real-time progress tracking'
    ]
  },
  {
    id: 2,
    title: 'Task Management API',
    description: 'RESTful API built with Java Spring Boot for task and project management. Includes user roles, team collaboration, and notification system.',
    image: dockerProject,
    category: 'backend',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit'],
    githubUrl: '#',
    status: 'completed',
    highlights: [
      'Clean architecture pattern',
      'Comprehensive API documentation',
      'Containerized deployment'
    ]
  },
  {
    id: 3,
    title: 'Image Classification Model',
    description: 'Computer vision project using Python and TensorFlow to classify images. Includes data preprocessing, model training, and web interface for predictions.',
    image: mlProject,
    category: 'ai',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'NumPy'],
    githubUrl: '#',
    status: 'completed',
    highlights: [
      '95% accuracy on test dataset',
      'Real-time image processing',
      'Web-based prediction interface'
    ]
  },
  {
    id: 4,
    title: 'AWS Infrastructure Automation',
    description: 'Infrastructure as Code project using AWS services. Automated deployment pipeline with monitoring and scaling capabilities.',
    image: dockerProject,
    category: 'devops',
    technologies: ['AWS', 'Terraform', 'Docker', 'Jenkins', 'CloudWatch'],
    githubUrl: '#',
    status: 'in-progress',
    highlights: [
      'Auto-scaling infrastructure',
      'CI/CD pipeline setup',
      'Cost optimization strategies'
    ]
  },
  {
    id: 5,
    title: 'ChatBot with Generative AI',
    description: 'Intelligent chatbot using GPT models for natural language processing. Features context awareness and domain-specific responses.',
    image: mlProject,
    category: 'ai',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'Vector DB', 'LangChain'],
    githubUrl: '#',
    status: 'in-progress',
    highlights: [
      'Context-aware conversations',
      'Domain-specific knowledge',
      'Scalable API architecture'
    ]
  },
  {
    id: 6,
    title: 'Microservices Architecture',
    description: 'Distributed system design with multiple microservices, API gateway, and service mesh for scalable applications.',
    image: dockerProject,
    category: 'backend',
    technologies: ['Java', 'Spring Cloud', 'Kubernetes', 'Istio', 'MongoDB'],
    githubUrl: '#',
    status: 'planned',
    highlights: [
      'Service mesh implementation',
      'Distributed tracing',
      'Load balancing strategies'
    ]
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'backend' | 'ai' | 'devops'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all');

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
    const statusMatch = statusFilter === 'all' || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'backend', label: 'Backend Systems', icon: '⚙️' },
    { id: 'ai', label: 'AI & ML', icon: '🤖' },
    { id: 'devops', label: 'DevOps', icon: '☁️' }
  ];

  const statusOptions = [
    { id: 'all', label: 'All Status', color: 'primary' },
    { id: 'completed', label: 'Completed', color: 'accent-green' },
    { id: 'in-progress', label: 'In Progress', color: 'accent-orange' },
    { id: 'planned', label: 'Planned', color: 'accent-purple' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'accent-green';
      case 'in-progress': return 'accent-orange';
      case 'planned': return 'accent-purple';
      default: return 'primary';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-clean">My</span>{' '}
            <span className="accent-blue">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id as any)}
                className={`${
                  activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-muted hover:bg-muted/50'
                } transition-all duration-300`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {statusOptions.map((status) => (
              <Button
                key={status.id}
                variant={statusFilter === status.id ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(status.id as any)}
                className={`${
                  statusFilter === status.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-muted hover:bg-muted/50'
                } transition-all duration-300`}
              >
                {status.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="clean-card group hover:scale-105 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-background/90 text-${getStatusColor(project.status)} border border-${getStatusColor(project.status)}/30`}>
                  {project.status.replace('-', ' ').toUpperCase()}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  {project.liveUrl && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green hover:text-background">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold accent-blue">{project.title}</h3>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2024
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-muted/30 border border-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-accent-green mr-2">▪</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={`${project.liveUrl ? '' : 'flex-1'} border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-background`}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="clean-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-8 w-8 accent-blue" />
            </div>
            <h3 className="text-2xl font-bold accent-blue">6+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>

          <div className="clean-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-green/10 rounded-xl flex items-center justify-center">
              <Users className="h-8 w-8 accent-green" />
            </div>
            <h3 className="text-2xl font-bold accent-green">10+</h3>
            <p className="text-muted-foreground">Technologies Used</p>
          </div>

          <div className="clean-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-purple/10 rounded-xl flex items-center justify-center">
              <Calendar className="h-8 w-8 accent-purple" />
            </div>
            <h3 className="text-2xl font-bold accent-purple">2+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;