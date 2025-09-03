import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLanguage } from './LanguageProvider';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'education', href: '#education' },
    { key: 'certifications', href: '#certifications' },
    { key: 'contact', href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Medium screens navigation - Sidebar trigger */}
          <div className="hidden md:flex lg:hidden flex-1 justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4 mr-2" />
                  {t('nav.menu')}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>{t('nav.navigation')}</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-muted"
                    >
                      {t(`nav.${item.key}`)}
                    </a>
                  ))}
                  
                  {/* Language selector for medium screens */}
                  <div className="px-4 py-2 border-t mt-6 pt-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">{t('nav.language')}:</p>
                    <div className="flex flex-col gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={language === lang.code ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage(lang.code as any)}
                          className="justify-start"
                        >
                          {lang.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Language Selector - Always on the right */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">
                    {languages.find(l => l.code === language)?.name}
                  </span>
                  <span className="md:hidden">
                    {language.toUpperCase()}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button - Sidebar */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>{t('nav.navigation')}</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.key}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary block px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-muted"
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    ))}
                    
                    {/* Language selector for mobile */}
                    <div className="px-4 py-2 border-t mt-6 pt-6">
                      <p className="text-sm font-medium text-muted-foreground mb-3">{t('nav.language')}:</p>
                      <div className="flex flex-col gap-2">
                        {languages.map((lang) => (
                          <Button
                            key={lang.code}
                            variant={language === lang.code ? "default" : "outline"}
                            size="sm"
                            onClick={() => setLanguage(lang.code as any)}
                            className="justify-start"
                          >
                            {lang.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;