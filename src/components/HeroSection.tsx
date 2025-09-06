import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import profilePhoto from '@/assets/mohamed_amine_taoufik.jpeg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-primary-foreground/80 font-medium">
                {t('hero.greeting')}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Mohamed Amine
                <span className="block text-accent-light">
                  Taoufik
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                {t('hero.title')}
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="#projects" className="flex items-center">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-black hover:bg-primary-foreground/20 backdrop-blur-sm shadow-lg hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('hero.contact')}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/20 hover:border-primary-foreground/40 shadow-lg hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="/cv.pdf" download="Mohamed_Amine_Taoufik_CV.pdf" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  {t('hero.downloadCV')}
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform scale-110 animate-float"></div>
              <img
                src={profilePhoto}
                alt="Mohamed Amine Taoufik"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-primary-foreground/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;