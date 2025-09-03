import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.navigation': 'Navigation',
    'nav.language': 'Language',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Full-Stack Developer & Software Engineer',
    'hero.subtitle': 'Passionate about creating innovative solutions with cutting-edge technologies',
    'hero.cta': 'View My Projects',
    'hero.contact': 'Get In Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'I am a fourth-year engineering student at École Marocaine des Sciences de l\'Ingénieur, specializing in full-stack development. My passion for software development drives me to create innovative solutions using modern technologies.',
    'about.languages': 'Languages: Arabic (Native), French & English (Fluent)',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend Development',
    'skills.frontend': 'Frontend Development',
    'skills.database': 'Databases',
    'skills.devops': 'DevOps & Tools',
    'skills.ai': 'AI & Other Technologies',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    'projects.techStack': 'Tech Stack',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.internship': 'Full-Stack Developer Intern',
    'experience.company': 'ONDA (Office National des Aéroports)',
    'experience.duration': 'July 14 - August 14, 2024',
    'experience.description': 'Gained hands-on experience in enterprise-level web development and maintenance management systems.',
    
    // Education Section
    'education.title': 'Education',
    'education.current': 'Engineering Degree (In Progress)',
    'education.currentSchool': 'École Marocaine des Sciences de l\'Ingénieur',
    'education.currentYear': '4th Year, 2021 - Present',
    'education.baccalaureate': 'Baccalaureate',
    'education.bacSchool': 'École Nour Alhiba, Kalaat Sraghna',
    'education.bacYear': '2021',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s discuss your next project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.location': 'Marrakech, Morocco',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.navigation': 'Navigation',
    'nav.language': 'Langue',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Développeur Full-Stack & Ingénieur Logiciel',
    'hero.subtitle': 'Passionné par la création de solutions innovantes avec des technologies de pointe',
    'hero.cta': 'Voir Mes Projets',
    'hero.contact': 'Me Contacter',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description': 'Je suis étudiant en quatrième année d\'ingénieur à l\'École Marocaine des Sciences de l\'Ingénieur, spécialisé en développement full-stack. Ma passion pour le développement logiciel me pousse à créer des solutions innovantes en utilisant des technologies modernes.',
    'about.languages': 'Langues : Arabe (Natif), Français et Anglais (Courant)',
    
    // Skills Section
    'skills.title': 'Compétences Techniques',
    'skills.backend': 'Développement Backend',
    'skills.frontend': 'Développement Frontend',
    'skills.database': 'Bases de Données',
    'skills.devops': 'DevOps et Outils',
    'skills.ai': 'IA et Autres Technologies',
    
    // Projects Section
    'projects.title': 'Projets Principaux',
    'projects.viewLive': 'Voir en Direct',
    'projects.viewCode': 'Voir le Code',
    'projects.techStack': 'Technologies',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.internship': 'Stagiaire Développeur Full-Stack',
    'experience.company': 'ONDA (Office National des Aéroports)',
    'experience.duration': '14 Juillet - 14 Août 2024',
    'experience.description': 'Expérience pratique dans le développement web d\'entreprise et les systèmes de gestion de maintenance.',
    
    // Education Section
    'education.title': 'Formation',
    'education.current': 'Diplôme d\'Ingénieur (En Cours)',
    'education.currentSchool': 'École Marocaine des Sciences de l\'Ingénieur',
    'education.currentYear': '4ème Année, 2021 - Présent',
    'education.baccalaureate': 'Baccalauréat',
    'education.bacSchool': 'École Nour Alhiba, Kalaat Sraghna',
    'education.bacYear': '2021',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.description': 'Discutons de votre prochain projet',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.location': 'Marrakech, Maroc',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.certifications': 'الشهادات',
    'nav.contact': 'تواصل معي',
    'nav.menu': 'القائمة',
    'nav.navigation': 'التنقل',
    'nav.language': 'اللغة',
    
    // Hero Section
    'hero.greeting': 'مرحباً، أنا',
    'hero.title': 'مطور ويب متكامل ومهندس برمجيات',
    'hero.subtitle': 'شغوف بإنشاء حلول مبتكرة باستخدام أحدث التقنيات',
    'hero.cta': 'عرض مشاريعي',
    'hero.contact': 'تواصل معي',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.description': 'أنا طالب في السنة الرابعة من الهندسة في المدرسة المغربية لعلوم المهندس، متخصص في التطوير المتكامل. شغفي بتطوير البرمجيات يدفعني لإنشاء حلول مبتكرة باستخدام التقنيات الحديثة.',
    'about.languages': 'اللغات: العربية (الأم)، الفرنسية والإنجليزية (طلاقة)',
    
    // Skills Section
    'skills.title': 'المهارات التقنية',
    'skills.backend': 'تطوير الخادم',
    'skills.frontend': 'تطوير الواجهة',
    'skills.database': 'قواعد البيانات',
    'skills.devops': 'أدوات التطوير',
    'skills.ai': 'الذكاء الاصطناعي وتقنيات أخرى',
    
    // Projects Section
    'projects.title': 'المشاريع المميزة',
    'projects.viewLive': 'عرض المشروع',
    'projects.viewCode': 'عرض الكود',
    'projects.techStack': 'التقنيات المستخدمة',
    
    // Experience Section
    'experience.title': 'الخبرة المهنية',
    'experience.internship': 'متدرب مطور ويب متكامل',
    'experience.company': 'المكتب الوطني للمطارات',
    'experience.duration': '14 يوليو - 14 أغسطس 2024',
    'experience.description': 'اكتساب خبرة عملية في تطوير الويب على مستوى المؤسسات وأنظمة إدارة الصيانة.',
    
    // Education Section
    'education.title': 'التعليم',
    'education.current': 'شهادة الهندسة (قيد الدراسة)',
    'education.currentSchool': 'المدرسة المغربية لعلوم المهندس',
    'education.currentYear': 'السنة الرابعة، 2021 - الحاضر',
    'education.baccalaureate': 'شهادة البكالوريا',
    'education.bacSchool': 'مدرسة نور الحيبة، قلعة السراغنة',
    'education.bacYear': '2021',
    
    // Certifications Section
    'certifications.title': 'الشهادات',
    
    // Contact Section
    'contact.title': 'تواصل معي',
    'contact.description': 'لنناقش مشروعك القادم',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.location': 'مراكش، المغرب',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};