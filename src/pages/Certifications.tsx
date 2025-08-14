import { useState } from 'react';
import { Award, Calendar, ExternalLink, Download, CheckCircle, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  skills: string[];
  credentialUrl?: string;
  badgeUrl?: string;
  level: 'fundamental' | 'associate' | 'professional' | 'expert';
  category: 'cloud' | 'programming' | 'ai' | 'devops' | 'database';
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'In Progress - Expected Dec 2024',
    status: 'in-progress',
    description: 'Foundational understanding of AWS cloud services, pricing, and best practices.',
    skills: ['AWS Core Services', 'Cloud Computing', 'Security', 'Pricing Models'],
    level: 'fundamental',
    category: 'cloud'
  },
  {
    id: 2,
    title: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: 'Planned - Q1 2025',
    status: 'planned',
    description: 'Design and deploy scalable, highly available systems on AWS.',
    skills: ['System Architecture', 'AWS Services', 'High Availability', 'Cost Optimization'],
    level: 'associate',
    category: 'cloud'
  },
  {
    id: 3,
    title: 'Oracle Certified Associate - Java SE',
    issuer: 'Oracle',
    date: 'Planned - Q2 2025',
    status: 'planned',
    description: 'Demonstrates proficiency in Java programming fundamentals and object-oriented concepts.',
    skills: ['Java Fundamentals', 'OOP Concepts', 'Data Types', 'Control Structures'],
    level: 'associate',
    category: 'programming'
  },
  {
    id: 4,
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    date: 'Planned - Q3 2025',
    status: 'planned',
    description: 'Practical machine learning skills using TensorFlow for real-world applications.',
    skills: ['Neural Networks', 'Computer Vision', 'NLP', 'TensorFlow'],
    level: 'professional',
    category: 'ai'
  },
  {
    id: 5,
    title: 'Docker Certified Associate',
    issuer: 'Docker',
    date: 'Planned - Q2 2025',
    status: 'planned',
    description: 'Container orchestration and Docker ecosystem expertise.',
    skills: ['Containerization', 'Docker Compose', 'Container Security', 'Orchestration'],
    level: 'associate',
    category: 'devops'
  },
  {
    id: 6,
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'Planned - Q4 2025',
    status: 'planned',
    description: 'AI and machine learning concepts using Microsoft Azure services.',
    skills: ['Azure AI Services', 'Cognitive Services', 'ML Ops', 'AI Ethics'],
    level: 'fundamental',
    category: 'ai'
  }
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cloud' | 'programming' | 'ai' | 'devops' | 'database'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all');

  const filteredCertifications = certifications.filter(cert => {
    const categoryMatch = activeCategory === 'all' || cert.category === activeCategory;
    const statusMatch = statusFilter === 'all' || cert.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const categories = [
    { id: 'all', label: 'All Certifications', icon: '📋' },
    { id: 'cloud', label: 'Cloud Computing', icon: '☁️' },
    { id: 'programming', label: 'Programming', icon: '💻' },
    { id: 'ai', label: 'AI & ML', icon: '🤖' },
    { id: 'devops', label: 'DevOps', icon: '🔧' },
    { id: 'database', label: 'Database', icon: '🗄️' }
  ];

  const statusOptions = [
    { id: 'all', label: 'All Status' },
    { id: 'completed', label: 'Completed', icon: CheckCircle },
    { id: 'in-progress', label: 'In Progress', icon: Clock },
    { id: 'planned', label: 'Planned', icon: Target }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'accent-green';
      case 'in-progress': return 'accent-orange';
      case 'planned': return 'accent-purple';
      default: return 'primary';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'fundamental': return 'accent-blue';
      case 'associate': return 'accent-green';
      case 'professional': return 'accent-orange';
      case 'expert': return 'accent-purple';
      default: return 'primary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'planned': return Target;
      default: return Award;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-clean">Certifications</span>{' '}
            <span className="accent-green">& Learning Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey of continuous learning and professional development in technology
          </p>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="clean-card text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-accent-green/10 rounded-xl flex items-center justify-center">
              <CheckCircle className="h-6 w-6 accent-green" />
            </div>
            <h3 className="text-2xl font-bold accent-green">
              {certifications.filter(c => c.status === 'completed').length}
            </h3>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>

          <div className="clean-card text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-accent-orange/10 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 accent-orange" />
            </div>
            <h3 className="text-2xl font-bold accent-orange">
              {certifications.filter(c => c.status === 'in-progress').length}
            </h3>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>

          <div className="clean-card text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-accent-purple/10 rounded-xl flex items-center justify-center">
              <Target className="h-6 w-6 accent-purple" />
            </div>
            <h3 className="text-2xl font-bold accent-purple">
              {certifications.filter(c => c.status === 'planned').length}
            </h3>
            <p className="text-sm text-muted-foreground">Planned</p>
          </div>

          <div className="clean-card text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 accent-blue" />
            </div>
            <h3 className="text-2xl font-bold accent-blue">{certifications.length}</h3>
            <p className="text-sm text-muted-foreground">Total Goals</p>
          </div>
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
            {statusOptions.map((status) => {
              const IconComponent = status.icon || Award;
              return (
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
                  {status.icon && <IconComponent className="h-4 w-4 mr-2" />}
                  {status.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => {
            const StatusIcon = getStatusIcon(cert.status);
            return (
              <div
                key={cert.id}
                className="clean-card hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${getStatusColor(cert.status)}/10 rounded-xl flex items-center justify-center`}>
                    <StatusIcon className={`h-6 w-6 ${getStatusColor(cert.status)}`} />
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(cert.status)}/10 text-${getStatusColor(cert.status)} border border-${getStatusColor(cert.status)}/30`}>
                      {cert.status.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getLevelColor(cert.level)}/10 text-${getLevelColor(cert.level)} border border-${getLevelColor(cert.level)}/30`}>
                      {cert.level.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold accent-blue mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.date}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-muted/30 border border-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    {cert.credentialUrl ? (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Credential
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 border-muted text-muted-foreground cursor-not-allowed"
                        disabled
                      >
                        <Target className="h-4 w-4 mr-1" />
                        {cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </Button>
                    )}
                    
                    {cert.badgeUrl && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-accent-green text-accent-green hover:bg-accent-green hover:text-background"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Roadmap */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text-clean">Learning</span>{' '}
              <span className="accent-purple">Roadmap 2024-2025</span>
            </h2>
            <p className="text-muted-foreground">
              My planned certification journey and skill development path
            </p>
          </div>

          <div className="clean-card">
            <div className="space-y-6">
              {/* Q4 2024 */}
              <div className="border-l-4 border-accent-orange pl-6">
                <h3 className="text-xl font-bold accent-orange mb-2">Q4 2024</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 accent-orange" />
                    <span>AWS Certified Cloud Practitioner (In Progress)</span>
                  </div>
                </div>
              </div>

              {/* Q1 2025 */}
              <div className="border-l-4 border-accent-blue pl-6">
                <h3 className="text-xl font-bold accent-blue mb-2">Q1 2025</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Target className="h-4 w-4 mr-2 accent-blue" />
                    <span>AWS Certified Solutions Architect Associate</span>
                  </div>
                </div>
              </div>

              {/* Q2 2025 */}
              <div className="border-l-4 border-accent-green pl-6">
                <h3 className="text-xl font-bold accent-green mb-2">Q2 2025</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Target className="h-4 w-4 mr-2 accent-green" />
                    <span>Oracle Certified Associate - Java SE</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Target className="h-4 w-4 mr-2 accent-green" />
                    <span>Docker Certified Associate</span>
                  </div>
                </div>
              </div>

              {/* Q3-Q4 2025 */}
              <div className="border-l-4 border-accent-purple pl-6">
                <h3 className="text-xl font-bold accent-purple mb-2">Q3-Q4 2025</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Target className="h-4 w-4 mr-2 accent-purple" />
                    <span>TensorFlow Developer Certificate</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Target className="h-4 w-4 mr-2 accent-purple" />
                    <span>Microsoft Azure AI Fundamentals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;