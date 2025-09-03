import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: 'Introduction to Cloud Computing',
      issuer: 'IBM',
      category: 'Cloud Computing',
      skills: ['Cloud Fundamentals', 'AWS', 'Infrastructure']
    },
    {
      title: 'Introduction to Containers with Docker, Kubernetes & OpenShift',
      issuer: 'IBM',
      category: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Containerization']
    },
    {
      title: 'Introduction to Java and Object-Oriented Programming',
      issuer: 'University of Pennsylvania',
      category: 'Programming',
      skills: ['Java', 'OOP', 'Programming Fundamentals']
    },
    {
      title: 'Object-Oriented Programming in C++',
      issuer: 'EPFL',
      category: 'Programming',
      skills: ['C++', 'OOP', 'Data Structures']
    },
    {
      title: 'React Basics',
      issuer: 'Meta',
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'Web Development']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud Computing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DevOps': return 'bg-green-100 text-green-800 border-green-200';
      case 'Programming': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Frontend Development': return 'bg-orange-100 text-orange-800 border-orange-200';
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
                  <p className="text-sm font-medium text-muted-foreground mb-2">Skills Gained:</p>
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
                Continuous Learning
              </h3>
              <p className="text-muted-foreground">
                I'm committed to staying current with the latest technologies and best practices 
                in software development. These certifications represent my dedication to 
                professional growth and learning from industry leaders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;