import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: t('certifications.cloudComputing'),
      issuer: t('certifications.ibm'),
      category: t('certifications.cloudCategory'),
      skills: ['Cloud Fundamentals', 'AWS', 'Infrastructure']
    },
    {
      title: t('certifications.containers'),
      issuer: t('certifications.ibm'),
      category: t('certifications.devopsCategory'),
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Containerization']
    },
    {
      title: t('certifications.javaIntro'),
      issuer: t('certifications.upenn'),
      category: t('certifications.programmingCategory'),
      skills: ['Java', 'OOP', 'Programming Fundamentals']
    },
    {
      title: t('certifications.cppOop'),
      issuer: t('certifications.epfl'),
      category: t('certifications.programmingCategory'),
      skills: ['C++', 'OOP', 'Data Structures']
    },
    {
      title: t('certifications.reactBasics'),
      issuer: t('certifications.meta'),
      category: t('certifications.frontendCategory'),
      skills: ['React', 'JavaScript', 'Web Development']
    }
  ];

  const getCategoryColor = (category: string) => {
    const cloudCategory = t('certifications.cloudCategory');
    const devopsCategory = t('certifications.devopsCategory');
    const programmingCategory = t('certifications.programmingCategory');
    const frontendCategory = t('certifications.frontendCategory');
    
    switch (category) {
      case cloudCategory: return 'bg-blue-100 text-blue-800 border-blue-200';
      case devopsCategory: return 'bg-green-100 text-green-800 border-green-200';
      case programmingCategory: return 'bg-purple-100 text-purple-800 border-purple-200';
      case frontendCategory: return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('certifications.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="group card-gradient shadow-professional hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-start space-x-3">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge 
                  variant="outline" 
                  className={`${getCategoryColor(cert.category)} border`}
                >
                  {cert.category}
                </Badge>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{t('certifications.skillsGained')}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-gradient shadow-professional">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('certifications.continuousLearning')}
              </h3>
              <p className="text-muted-foreground">
                {t('certifications.learningDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;