import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Code, Lightbulb } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in both frontend and backend technologies'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creating cutting-edge solutions for real-world problems'
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Fluent in Arabic, French, and English'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-base text-muted-foreground">
              {t('about.languages')}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-gradient shadow-professional hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;