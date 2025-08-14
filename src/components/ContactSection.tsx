import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'neon-purple'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:alex@developer.com',
      color: 'neon-green'
    }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's</span>{' '}
            <span className="neon-purple">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card animate-fade-scale">
            <h3 className="text-2xl font-bold neon-cyan mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="glass bg-muted/5 border-muted focus:border-neon-cyan transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="glass bg-muted/5 border-muted focus:border-neon-cyan transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="glass bg-muted/5 border-muted focus:border-neon-cyan transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary text-background hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="glass-card animate-fade-scale" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for remote work and local collaboration
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-card animate-fade-scale" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold text-foreground mb-6">Connect With Me</h4>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-xl bg-${link.color}/5 border border-${link.color}/20 hover:bg-${link.color}/10 hover:border-${link.color}/40 transition-all duration-300 group`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${link.color}/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className={`h-5 w-5 text-${link.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">@alexdeveloper</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card animate-fade-scale" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-semibold text-foreground mb-4">Current Availability</h4>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse mr-3"></div>
                <span className="text-neon-green font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;