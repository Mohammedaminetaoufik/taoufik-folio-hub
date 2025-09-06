import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from './LanguageProvider';
import { 
  Server, 
  Monitor, 
  Database, 
  Settings, 
  Cpu 
} from 'lucide-react';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.backend'),
      icon: Server,
      skills: [
        { name: 'Laravel', level: 95 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'C# (.NET)', level: 75 },
        { name: 'PHP', level: 90 }
      ]
    },
    {
      title: t('skills.frontend'),
      icon: Monitor,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'React', level: 70 }
      ]
    },
    {
      title: t('skills.database'),
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'SQLite', level: 85 }
      ]
    },
    {
      title: t('skills.devops'),
      icon: Settings,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'REST APIs', level: 90 },
        { name: 'cPanel', level: 85 }
      ]
    },
    {
      title: t('skills.ai'),
      icon: Cpu,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'OpenCV', level: 75 },
        { name: 'Java', level: 80 }
      ]
    }
  ];

  const languages = ['Python', 'Java', 'PHP', 'JavaScript', 'C#', 'HTML/CSS'];
  const frameworks = ['Laravel', 'Spring Boot', 'Node.js', '.NET', 'Tailwind CSS'];
  const tools = ['Docker', 'Git', 'MySQL', 'OpenCV', 'REST APIs', 'cPanel'];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('skills.title')}
          </h2>
        </div>

        {/* Skills Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient shadow-professional">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <category.icon className="h-5 w-5 text-accent" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">{t('skills.programming')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="px-4 py-2 text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">{t('skills.frameworks')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frameworks.map((framework) => (
                <Badge key={framework} variant="outline" className="px-4 py-2 text-sm border-accent text-accent">
                  {framework}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">{t('skills.tools')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <Badge key={tool} className="px-4 py-2 text-sm bg-primary text-primary-foreground">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;