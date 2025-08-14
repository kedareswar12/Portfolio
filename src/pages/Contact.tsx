import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kedareswar.tiruveedi@email.com',
      link: 'mailto:kedareswar.tiruveedi@email.com',
      color: 'accent-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXX',
      color: 'accent-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null,
      color: 'accent-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/kedareswar',
      color: 'accent-blue',
      handle: '@kedareswar'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/kedareswar-tiruveedi',
      color: 'accent-green',
      handle: 'kedareswar-tiruveedi'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      url: '#',
      color: 'accent-purple',
      handle: 'kedareswar#1234'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-clean">Get In</span>{' '}
            <span className="accent-blue">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology. 
            I'm always excited to connect with fellow developers and explore new possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-delay">
            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Send className="h-6 w-6 accent-blue" />
                </div>
                <h2 className="text-2xl font-bold accent-blue">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="bg-muted/20 border-muted focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      className="bg-muted/20 border-muted focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject *</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What's this about?"
                    className="bg-muted/20 border-muted focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, question, or just say hello..."
                    rows={6}
                    className="bg-muted/20 border-muted focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            {/* Contact Details */}
            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 accent-green" />
                </div>
                <h3 className="text-xl font-bold accent-green">Contact Information</h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-${info.color}/10 rounded-lg flex items-center justify-center`}>
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className={`${info.color} hover:underline transition-colors`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="clean-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 accent-purple" />
                </div>
                <h3 className="text-xl font-bold accent-purple">Connect With Me</h3>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-xl bg-${link.color}/5 border border-${link.color}/20 hover:bg-${link.color}/10 hover:border-${link.color}/40 transition-all duration-300 group`}
                  >
                    <div className={`w-12 h-12 bg-${link.color}/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className={`h-6 w-6 ${link.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="clean-card">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse mr-3"></div>
                <h3 className="text-lg font-semibold accent-green">Currently Available</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  ✅ Open to full-time opportunities
                </p>
                <p>
                  ✅ Available for freelance projects
                </p>
                <p>
                  ✅ Interested in collaborative projects
                </p>
                <p>
                  ✅ Happy to discuss technology and share knowledge
                </p>
              </div>
              <div className="mt-4 p-3 bg-muted/20 rounded-lg border border-muted/30">
                <p className="text-xs text-muted-foreground">
                  <strong>Response Time:</strong> I typically respond to messages within 24 hours. 
                  For urgent matters, feel free to reach out via multiple channels.
                </p>
              </div>
            </div>

            {/* Best Times to Reach */}
            <div className="clean-card">
              <h3 className="text-lg font-semibold accent-orange mb-4">Best Times to Reach</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="text-foreground">10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="text-foreground">By appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text-clean">Frequently</span>{' '}
              <span className="accent-purple">Asked Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clean-card">
              <h4 className="font-semibold text-foreground mb-2">What's your preferred communication method?</h4>
              <p className="text-sm text-muted-foreground">
                Email is best for detailed discussions and project inquiries. For quick questions, 
                LinkedIn or GitHub are great alternatives.
              </p>
            </div>

            <div className="clean-card">
              <h4 className="font-semibold text-foreground mb-2">Are you available for remote work?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! I'm open to remote opportunities and have experience working with distributed teams.
              </p>
            </div>

            <div className="clean-card">
              <h4 className="font-semibold text-foreground mb-2">What technologies are you most interested in?</h4>
              <p className="text-sm text-muted-foreground">
                Currently focusing on cloud technologies (AWS), AI/ML applications, and full-stack development 
                with Java and Python.
              </p>
            </div>

            <div className="clean-card">
              <h4 className="font-semibold text-foreground mb-2">Do you offer mentoring or consulting?</h4>
              <p className="text-sm text-muted-foreground">
                I'm always happy to help fellow developers and share knowledge. Feel free to reach out 
                for technical discussions or career advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;