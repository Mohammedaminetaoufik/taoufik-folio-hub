import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, CalendarDays, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const EducationSection = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.current'),
      school: t('education.currentSchool'),
      period: t('education.currentYear'),
      status: 'current',
      description: 'Specializing in Full-Stack Development and Software Engineering',
      link: 'https://emsi.ma'
    },
    {
      degree: t('education.baccalaureate'),
      school: t('education.bacSchool'),
      period: t('education.bacYear'),
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('education.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="card-gradient shadow-professional">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${edu.status === 'current' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                    <GraduationCap className={`h-6 w-6 ${edu.status === 'current' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              {edu.description && (
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                  {edu.link && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-fit"
                      asChild
                    >
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn more about EMSI
                      </a>
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;