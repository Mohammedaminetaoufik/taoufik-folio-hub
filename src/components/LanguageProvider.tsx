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
    'hero.downloadCV': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'I am a fifth-year engineering student at École Marocaine des Sciences de l\'Ingénieur, specializing in full-stack development. My passion for software development drives me to create innovative solutions using modern technologies.',
    'about.languages': 'Languages: Arabic (Native), French & English (Fluent)',
    'about.fullstack': 'Full-Stack Development',
    'about.fullstackDesc': 'Expertise in both frontend and backend technologies',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Creating cutting-edge solutions for real-world problems',
    'about.multilingual': 'Multilingual',
    'about.multilingualDesc': 'Fluent in Arabic, French, and English',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend Development',
    'skills.frontend': 'Frontend Development',
    'skills.database': 'Databases',
    'skills.devops': 'DevOps & Tools',
    'skills.ai': 'AI & Other Technologies',
    'skills.programming': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.tools': 'Tools & Technologies',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    'projects.techStack': 'Tech Stack',
    'projects.essetrack': 'A desktop logistics application built with C# (.NET) that functions both offline and online, enabling seamless shipment tracking and data synchronization. Developed as a freelancer with ITC.',
    'projects.sinodiag': 'A comprehensive web-based medical clinic management system using Laravel, PHP, MySQL, and Tailwind, integrating AI to manage patient records, appointments, and consultations. Developed as a freelancer with ITC.',
    'projects.sinophyte': 'A platform dedicated to traditional and modern medicine offering a comprehensive database for amateurs and professionals, with detailed information on medicinal plants, therapeutic formulas and syndromes. Developed as a freelancer with ITC.',
    'projects.smartyJob': 'A real-time facial recognition system developed in Python using OpenCV and MySQL for secure user authentication, complete with web interface and profile management.',
    'projects.gmao': 'A computerized maintenance management system created during internship, allowing equipment tracking, maintenance scheduling, and technician request handling.',
    'projects.smartTraffic': 'An intelligent system combining a Java-based Android mobile app and Laravel backend with REST API to dynamically control traffic lights and prioritize emergency vehicles.',
    'projects.lwem': 'A comprehensive ecommerce platform for equipment sales and services, built with native PHP and MySQL, featuring product catalog, shopping cart, order management, and customer portal.',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.internship': 'Full-Stack Developer Intern',
    'experience.company': 'ONDA (Office National des Aéroports)',
    'experience.duration': 'July 14 - August 14, 2024',
    'experience.description': 'Gained hands-on experience in enterprise-level web development and maintenance management systems.',
    'experience.freelance': 'Freelance Full-Stack Developer',
    'experience.itc': 'ITC (Various Projects)',
    'experience.freelanceDuration': '2023 - Present',
    'experience.remote': 'Remote',
    'experience.morocco': 'Morocco',
    'experience.freelanceDesc': 'Developing comprehensive web applications for healthcare and logistics sectors as an independent contractor.',
    'experience.keyAchievements': 'Key Achievements:',
    'experience.achievement1': 'Built Sinodiag - A complete medical clinic management system with AI integration',
    'experience.achievement2': 'Developed Essetrack - Desktop logistics application with offline/online synchronization',
    'experience.achievement3': 'Created Sinophyte - Traditional medicine platform with comprehensive database',
    'experience.achievement4': 'Managed deployment and hosting using cPanel for client projects',
    'experience.achievement5': 'Collaborated directly with clients to deliver custom solutions',
    'experience.achievementIntern1': 'Developed enterprise-level maintenance management systems',
    'experience.achievementIntern2': 'Implemented equipment tracking and scheduling features',
    'experience.achievementIntern3': 'Created technician request handling workflows',
    'experience.achievementIntern4': 'Gained experience with Laravel and MySQL in production environment',
    
    // Education Section
    'education.title': 'Education',
    'education.current': 'Engineering Degree (In Progress)',
    'education.currentSchool': 'École Marocaine des Sciences de l\'Ingénieur',
    'education.currentYear': '5th Year, 2021 - Present',
    'education.baccalaureate': 'Baccalaureate',
    'education.bacSchool': 'École Nour Alhiba, Kalaat Sraghna',
    'education.bacYear': '2021',
    'education.currentDesc': 'Specializing in Full-Stack Development and Software Engineering',
    'education.learnMore': 'Learn more about EMSI',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.cloudComputing': 'Introduction to Cloud Computing',
    'certifications.ibm': 'IBM',
    'certifications.cloudCategory': 'Cloud Computing',
    'certifications.containers': 'Introduction to Containers with Docker, Kubernetes & OpenShift',
    'certifications.devopsCategory': 'DevOps',
    'certifications.javaIntro': 'Introduction to Java and Object-Oriented Programming',
    'certifications.upenn': 'University of Pennsylvania',
    'certifications.programmingCategory': 'Programming',
    'certifications.cppOop': 'Object-Oriented Programming in C++',
    'certifications.epfl': 'EPFL',
    'certifications.reactBasics': 'React Basics',
    'certifications.meta': 'Meta',
    'certifications.frontendCategory': 'Frontend Development',
    'certifications.skillsGained': 'Skills Gained:',
    'certifications.continuousLearning': 'Continuous Learning',
    'certifications.learningDesc': 'I\'m committed to staying current with the latest technologies and best practices in software development. These certifications represent my dedication to professional growth and learning from industry leaders.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s discuss your next project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.location': 'Marrakech, Morocco',
    'contact.information': 'Contact Information',
    'contact.connect': 'Connect with me',
    'contact.sendMessage': 'Send me a message',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Tell me about your project or just say hello!',
    'contact.emailOpened': 'Email client opened!',
    'contact.emailDesc': 'Your message has been prepared in your email client.',
    
    // Footer
    'footer.brand': 'Mohamed Amine Taoufik',
    'footer.tagline': 'Full-Stack Developer & Software Engineer',
    'footer.description': 'Creating innovative solutions with cutting-edge technologies',
    'footer.quickLinks': 'Quick Links',
    'footer.getInTouch': 'Get in Touch',
    'footer.rights': 'All rights reserved.',
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
    'hero.downloadCV': 'Télécharger CV',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description': 'Je suis étudiant en cinquième année d\'ingénieur à l\'École Marocaine des Sciences de l\'Ingénieur, spécialisé en développement full-stack. Ma passion pour le développement logiciel me pousse à créer des solutions innovantes en utilisant des technologies modernes.',
    'about.languages': 'Langues : Arabe (Natif), Français et Anglais (Courant)',
    'about.fullstack': 'Développement Full-Stack',
    'about.fullstackDesc': 'Expertise en technologies frontend et backend',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Création de solutions de pointe pour les problèmes du monde réel',
    'about.multilingual': 'Multilingue',
    'about.multilingualDesc': 'Maîtrise de l\'arabe, du français et de l\'anglais',
    
    // Skills Section
    'skills.title': 'Compétences Techniques',
    'skills.backend': 'Développement Backend',
    'skills.frontend': 'Développement Frontend',
    'skills.database': 'Bases de Données',
    'skills.devops': 'DevOps et Outils',
    'skills.ai': 'IA et Autres Technologies',
    'skills.programming': 'Langages de Programmation',
    'skills.frameworks': 'Frameworks et Bibliothèques',
    'skills.tools': 'Outils et Technologies',
    
    // Projects Section
    'projects.title': 'Projets Principaux',
    'projects.viewLive': 'Voir en Direct',
    'projects.viewCode': 'Voir le Code',
    'projects.techStack': 'Technologies',
    'projects.essetrack': 'Une application de logistique de bureau construite avec C# (.NET) qui fonctionne hors ligne et en ligne, permettant le suivi transparent des expéditions et la synchronisation des données. Développée en tant que freelance avec ITC.',
    'projects.sinodiag': 'Un système complet de gestion de clinique médicale basé sur le web utilisant Laravel, PHP, MySQL et Tailwind, intégrant l\'IA pour gérer les dossiers patients, rendez-vous et consultations. Développé en tant que freelance avec ITC.',
    'projects.sinophyte': 'Une plateforme dédiée à la médecine traditionnelle et moderne offrant une base de données complète pour amateurs et professionnels, avec des informations détaillées sur les plantes médicinales, formules thérapeutiques et syndromes. Développée en tant que freelance avec ITC.',
    'projects.smartyJob': 'Un système de reconnaissance faciale en temps réel développé en Python utilisant OpenCV et MySQL pour l\'authentification sécurisée des utilisateurs, avec interface web et gestion de profils.',
    'projects.gmao': 'Un système informatisé de gestion de maintenance créé pendant le stage, permettant le suivi des équipements, la planification de la maintenance et la gestion des demandes des techniciens.',
    'projects.smartTraffic': 'Un système intelligent combinant une application mobile Android basée sur Java et un backend Laravel avec API REST pour contrôler dynamiquement les feux de circulation et prioriser les véhicules d\'urgence.',
    'projects.lwem': 'Une plateforme de commerce électronique complète pour la vente et les services d\'équipements, construite avec PHP natif et MySQL, avec catalogue de produits, panier d\'achat, gestion des commandes et portail client.',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.internship': 'Stagiaire Développeur Full-Stack',
    'experience.company': 'ONDA (Office National des Aéroports)',
    'experience.duration': '14 Juillet - 14 Août 2024',
    'experience.description': 'Expérience pratique dans le développement web d\'entreprise et les systèmes de gestion de maintenance.',
    'experience.freelance': 'Développeur Full-Stack Freelance',
    'experience.itc': 'ITC (Divers Projets)',
    'experience.freelanceDuration': '2023 - Présent',
    'experience.remote': 'À Distance',
    'experience.morocco': 'Maroc',
    'experience.freelanceDesc': 'Développement d\'applications web complètes pour les secteurs de la santé et de la logistique en tant que contractant indépendant.',
    'experience.keyAchievements': 'Réalisations Clés :',
    'experience.achievement1': 'Construit Sinodiag - Un système complet de gestion de clinique médicale avec intégration IA',
    'experience.achievement2': 'Développé Essetrack - Application de logistique de bureau avec synchronisation hors ligne/en ligne',
    'experience.achievement3': 'Créé Sinophyte - Plateforme de médecine traditionnelle avec base de données complète',
    'experience.achievement4': 'Géré le déploiement et l\'hébergement en utilisant cPanel pour les projets clients',
    'experience.achievement5': 'Collaboré directement avec les clients pour livrer des solutions personnalisées',
    'experience.achievementIntern1': 'Développé des systèmes de gestion de maintenance au niveau entreprise',
    'experience.achievementIntern2': 'Implémenté des fonctionnalités de suivi et de planification d\'équipements',
    'experience.achievementIntern3': 'Créé des flux de travail de gestion des demandes des techniciens',
    'experience.achievementIntern4': 'Acquis de l\'expérience avec Laravel et MySQL en environnement de production',
    
    // Education Section
    'education.title': 'Formation',
    'education.current': 'Diplôme d\'Ingénieur (En Cours)',
    'education.currentSchool': 'École Marocaine des Sciences de l\'Ingénieur',
    'education.currentYear': '5ème Année, 2021 - Présent',
    'education.baccalaureate': 'Baccalauréat',
    'education.bacSchool': 'École Nour Alhiba, Kalaat Sraghna',
    'education.bacYear': '2021',
    'education.currentDesc': 'Spécialisation en Développement Full-Stack et Ingénierie Logicielle',
    'education.learnMore': 'En savoir plus sur EMSI',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.cloudComputing': 'Introduction au Cloud Computing',
    'certifications.ibm': 'IBM',
    'certifications.cloudCategory': 'Cloud Computing',
    'certifications.containers': 'Introduction aux Conteneurs avec Docker, Kubernetes & OpenShift',
    'certifications.devopsCategory': 'DevOps',
    'certifications.javaIntro': 'Introduction à Java et à la Programmation Orientée Objet',
    'certifications.upenn': 'Université de Pennsylvanie',
    'certifications.programmingCategory': 'Programmation',
    'certifications.cppOop': 'Programmation Orientée Objet en C++',
    'certifications.epfl': 'EPFL',
    'certifications.reactBasics': 'Bases de React',
    'certifications.meta': 'Meta',
    'certifications.frontendCategory': 'Développement Frontend',
    'certifications.skillsGained': 'Compétences Acquises :',
    'certifications.continuousLearning': 'Apprentissage Continu',
    'certifications.learningDesc': 'Je m\'engage à rester à jour avec les dernières technologies et meilleures pratiques en développement logiciel. Ces certifications représentent mon dévouement à la croissance professionnelle et à l\'apprentissage auprès de leaders de l\'industrie.',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.description': 'Discutons de votre prochain projet',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.location': 'Marrakech, Maroc',
    'contact.information': 'Informations de Contact',
    'contact.connect': 'Connectez-vous avec moi',
    'contact.sendMessage': 'Envoyez-moi un message',
    'contact.namePlaceholder': 'Votre nom complet',
    'contact.emailPlaceholder': 'votre.email@exemple.com',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet ou dites simplement bonjour !',
    'contact.emailOpened': 'Client email ouvert !',
    'contact.emailDesc': 'Votre message a été préparé dans votre client email.',
    
    // Footer
    'footer.brand': 'Mohamed Amine Taoufik',
    'footer.tagline': 'Développeur Full-Stack & Ingénieur Logiciel',
    'footer.description': 'Création de solutions innovantes avec des technologies de pointe',
    'footer.quickLinks': 'Liens Rapides',
    'footer.getInTouch': 'Me Contacter',
    'footer.rights': 'Tous droits réservés.',
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
    'hero.downloadCV': 'تحميل السيرة الذاتية',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.description': 'أنا طالب في السنة الخامسة من الهندسة في المدرسة المغربية لعلوم المهندس، متخصص في التطوير المتكامل. شغفي بتطوير البرمجيات يدفعني لإنشاء حلول مبتكرة باستخدام التقنيات الحديثة.',
    'about.languages': 'اللغات: العربية (الأم)، الفرنسية والإنجليزية (طلاقة)',
    'about.fullstack': 'التطوير المتكامل',
    'about.fullstackDesc': 'خبرة في تقنيات الواجهة الأمامية والخلفية',
    'about.innovation': 'الابتكار',
    'about.innovationDesc': 'إنشاء حلول متطورة لمشاكل العالم الحقيقي',
    'about.multilingual': 'متعدد اللغات',
    'about.multilingualDesc': 'طلاقة في العربية والفرنسية والإنجليزية',
    
    // Skills Section
    'skills.title': 'المهارات التقنية',
    'skills.backend': 'تطوير الخادم',
    'skills.frontend': 'تطوير الواجهة',
    'skills.database': 'قواعد البيانات',
    'skills.devops': 'أدوات التطوير',
    'skills.ai': 'الذكاء الاصطناعي وتقنيات أخرى',
    'skills.programming': 'لغات البرمجة',
    'skills.frameworks': 'الأطر والمكتبات',
    'skills.tools': 'الأدوات والتقنيات',
    
    // Projects Section
    'projects.title': 'المشاريع المميزة',
    'projects.viewLive': 'عرض المشروع',
    'projects.viewCode': 'عرض الكود',
    'projects.techStack': 'التقنيات المستخدمة',
    'projects.essetrack': 'تطبيق لوجستيات مكتبي مبني بـ C# (.NET) يعمل بدون اتصال وبالاتصال، مما يمكن من تتبع الشحنات بسلاسة ومزامنة البيانات. تم تطويره كمستقل مع ITC.',
    'projects.sinodiag': 'نظام شامل لإدارة العيادات الطبية عبر الويب باستخدام Laravel وPHP وMySQL وTailwind، مع دمج الذكاء الاصطناعي لإدارة سجلات المرضى والمواعيد والاستشارات. تم تطويره كمستقل مع ITC.',
    'projects.sinophyte': 'منصة مخصصة للطب التقليدي والحديث تقدم قاعدة بيانات شاملة للهواة والمهنيين، مع معلومات مفصلة عن النباتات الطبية والصيغ العلاجية والمتلازمات. تم تطويره كمستقل مع ITC.',
    'projects.smartyJob': 'نظام تعرف على الوجوه في الوقت الفعلي مطور بـ Python باستخدام OpenCV وMySQL للمصادقة الآمنة للمستخدمين، مع واجهة ويب وإدارة الملفات الشخصية.',
    'projects.gmao': 'نظام محوسب لإدارة الصيانة تم إنشاؤه أثناء التدريب، يسمح بتتبع المعدات وجدولة الصيانة ومعالجة طلبات الفنيين.',
    'projects.smartTraffic': 'نظام ذكي يجمع بين تطبيق محمول أندرويد مبني بـ Java وخلفية Laravel مع REST API للتحكم الديناميكي في إشارات المرور وإعطاء الأولوية لمركبات الطوارئ.',
    'projects.lwem': 'منصة تجارة إلكترونية شاملة لبيع المعدات والخدمات، مبنية بـ PHP الأصلي وMySQL، تتضمن كتالوج المنتجات وسلة التسوق وإدارة الطلبات وبوابة العملاء.',
    
    // Experience Section
    'experience.title': 'الخبرة المهنية',
    'experience.internship': 'متدرب مطور ويب متكامل',
    'experience.company': 'المكتب الوطني للمطارات',
    'experience.duration': '14 يوليو - 14 أغسطس 2024',
    'experience.description': 'اكتساب خبرة عملية في تطوير الويب على مستوى المؤسسات وأنظمة إدارة الصيانة.',
    'experience.freelance': 'مطور ويب متكامل مستقل',
    'experience.itc': 'ITC (مشاريع متنوعة)',
    'experience.freelanceDuration': '2023 - الحاضر',
    'experience.remote': 'عن بُعد',
    'experience.morocco': 'المغرب',
    'experience.freelanceDesc': 'تطوير تطبيقات ويب شاملة لقطاعي الرعاية الصحية واللوجستيات كمقاول مستقل.',
    'experience.keyAchievements': 'الإنجازات الرئيسية:',
    'experience.achievement1': 'بناء Sinodiag - نظام شامل لإدارة العيادات الطبية مع دمج الذكاء الاصطناعي',
    'experience.achievement2': 'تطوير Essetrack - تطبيق لوجستيات مكتبي مع مزامنة بدون اتصال/بالاتصال',
    'experience.achievement3': 'إنشاء Sinophyte - منصة طب تقليدي مع قاعدة بيانات شاملة',
    'experience.achievement4': 'إدارة النشر والاستضافة باستخدام cPanel لمشاريع العملاء',
    'experience.achievement5': 'التعاون المباشر مع العملاء لتقديم حلول مخصصة',
    'experience.achievementIntern1': 'تطوير أنظمة إدارة الصيانة على مستوى المؤسسات',
    'experience.achievementIntern2': 'تنفيذ ميزات تتبع وجدولة المعدات',
    'experience.achievementIntern3': 'إنشاء سير عمل لمعالجة طلبات الفنيين',
    'experience.achievementIntern4': 'اكتساب خبرة مع Laravel وMySQL في بيئة الإنتاج',
    
    // Education Section
    'education.title': 'التعليم',
    'education.current': 'شهادة الهندسة (قيد الدراسة)',
    'education.currentSchool': 'المدرسة المغربية لعلوم المهندس',
    'education.currentYear': 'السنة الخامسة، 2021 - الحاضر',
    'education.baccalaureate': 'شهادة البكالوريا',
    'education.bacSchool': 'مدرسة نور الحيبة، قلعة السراغنة',
    'education.bacYear': '2021',
    'education.currentDesc': 'التخصص في التطوير المتكامل وهندسة البرمجيات',
    'education.learnMore': 'تعرف على المزيد حول EMSI',
    
    // Certifications Section
    'certifications.title': 'الشهادات',
    'certifications.cloudComputing': 'مقدمة في الحوسبة السحابية',
    'certifications.ibm': 'IBM',
    'certifications.cloudCategory': 'الحوسبة السحابية',
    'certifications.containers': 'مقدمة في الحاويات مع Docker وKubernetes وOpenShift',
    'certifications.devopsCategory': 'DevOps',
    'certifications.javaIntro': 'مقدمة في Java والبرمجة الكائنية',
    'certifications.upenn': 'جامعة بنسلفانيا',
    'certifications.programmingCategory': 'البرمجة',
    'certifications.cppOop': 'البرمجة الكائنية في C++',
    'certifications.epfl': 'EPFL',
    'certifications.reactBasics': 'أساسيات React',
    'certifications.meta': 'Meta',
    'certifications.frontendCategory': 'تطوير الواجهة الأمامية',
    'certifications.skillsGained': 'المهارات المكتسبة:',
    'certifications.continuousLearning': 'التعلم المستمر',
    'certifications.learningDesc': 'أنا ملتزم بالبقاء على اطلاع بأحدث التقنيات وأفضل الممارسات في تطوير البرمجيات. تمثل هذه الشهادات تفاني في النمو المهني والتعلم من قادة الصناعة.',
    
    // Contact Section
    'contact.title': 'تواصل معي',
    'contact.description': 'لنناقش مشروعك القادم',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.location': 'مراكش، المغرب',
    'contact.information': 'معلومات الاتصال',
    'contact.connect': 'تواصل معي',
    'contact.sendMessage': 'أرسل لي رسالة',
    'contact.namePlaceholder': 'اسمك الكامل',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'أخبرني عن مشروعك أو قل مرحباً فقط!',
    'contact.emailOpened': 'تم فتح عميل البريد الإلكتروني!',
    'contact.emailDesc': 'تم تحضير رسالتك في عميل البريد الإلكتروني.',
    
    // Footer
    'footer.brand': 'محمد أمين توفيق',
    'footer.tagline': 'مطور ويب متكامل ومهندس برمجيات',
    'footer.description': 'إنشاء حلول مبتكرة بتقنيات متطورة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.getInTouch': 'تواصل معي',
    'footer.rights': 'جميع الحقوق محفوظة.',
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