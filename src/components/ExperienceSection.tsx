import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MapPin, Building } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.freelance'),
      company: t('experience.itc'),
      duration: t('experience.freelanceDuration'),
      location: t('experience.remote'),
      description: t('experience.freelanceDesc'),
      achievements: [
        t('experience.achievement1'),
        t('experience.achievement2'),
        t('experience.achievement3'),
        t('experience.achievement4'),
        t('experience.achievement5')
      ]
    },
    {
      title: t('experience.internship'),
      company: t('experience.company'),
      duration: t('experience.duration'),
      location: t('experience.morocco'),
      description: t('experience.description'),
      achievements: [
        t('experience.achievementIntern1'),
        t('experience.achievementIntern2'),
        t('experience.achievementIntern3'),
        t('experience.achievementIntern4')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('experience.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-gradient shadow-professional">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Building className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {experience.company}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  {experience.description}
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">{t('experience.keyAchievements')}</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;