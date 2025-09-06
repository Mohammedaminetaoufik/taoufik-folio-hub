import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Essetrack',
      description: t('projects.essetrack'),
      techStack: ['C#', '.NET', 'Desktop App', 'Offline/Online Sync'],
      liveUrl: 'https://essetrack.com',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=500&h=300&fit=crop'
    },
    {
      title: 'Sinodiag (ITC Medical Platform)',
      description: t('projects.sinodiag'),
      techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'AI Integration'],
      liveUrl: 'https://sinodiag.com',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop'
    },
    {
      title: 'Sinophyte',
      description: t('projects.sinophyte'),
      techStack: ['Laravel', 'MySQL', 'Traditional Medicine', 'Database Management'],
      liveUrl: 'https://sinophyte.com',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=300&fit=crop'
    },
    {
      title: 'SMARTY JOB - Facial Recognition System',
      description: t('projects.smartyJob'),
      techStack: ['Python', 'OpenCV', 'MySQL', 'Web Interface', 'Authentication'],
      githubUrl: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop'
    },
    {
      title: 'GMAO Web Application for ONDA',
      description: t('projects.gmao'),
      techStack: ['Laravel', 'MySQL', 'Web Application', 'CMMS'],
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop'
    },
    {
      title: 'Smart Traffic Light System',
      description: t('projects.smartTraffic'),
      techStack: ['Java', 'Android', 'Laravel', 'REST API', 'IoT'],
      githubUrl: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&fit=crop'
    },
    {
      title: 'LWEM Equipements - Ecommerce Platform',
      description: t('projects.lwem'),
      techStack: ['PHP (Native)', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://www.lwemequipements.com/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('projects.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-gradient shadow-professional hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {t('projects.techStack')}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-accent hover:bg-accent/90"
                      asChild
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.viewLive')}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;