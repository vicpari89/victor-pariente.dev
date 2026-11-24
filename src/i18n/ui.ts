export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // Nav
    'nav.home':     'Inicio',
    'nav.about':    'Sobre mí',
    'nav.now':      'Ahora',
    'nav.projects': 'Proyectos',
    'nav.contact':  'Contacto',

    // Home
    'home.headline.line1': 'Víctor Pariente González',
    'home.headline.line2': 'Ingeniero de software',
    'home.exploring.title':   'Explorando ahora',

    // About
    'about.title': 'Sobre mí',
    'about.stack.experience': 'Experiencia',
    'about.stack.exploring':  'Explorando',

    // Now
    'now.title':           'Ahora',
    'now.updated':         'Actualizado',

    // Projects
    'projects.title':       'Proyectos',
    'projects.empty':
      'Pronto aparecerán experimentos aquí.',

    // Contact
    'contact.title':       'Contacto',
    'contact.body':        'Si quieres ponerte en contacto, aquí están mis enlaces.',
    'contact.linkedin':    'LinkedIn',
    'contact.github':      'GitHub',
    'contact.email':       'Email',

    // Meta descriptions (per page)
    'meta.desc.about':    'Ingeniero backend con más de 10 años de experiencia. De dónde vengo, qué construyo y la tecnología que utilizo.',
    'meta.desc.now':      'En qué estoy trabajando ahora mismo: lo que aprendo, investigo y construyo sobre IA, machine learning y backend.',
    'meta.desc.projects': 'Trabajo de fin de máster sobre accesibilidad urbana con machine learning y Amigo Regala, una aplicación web de sorteo de amigo invisible.',
    'meta.desc.contact':  'Ponte en contacto con Víctor Pariente — LinkedIn, GitHub y correo electrónico.',

    // Footer
    'footer.madeWith':     'Hecho con Astro. Código abierto en GitHub.',
    'footer.legal':        'Aviso legal',
    'footer.privacy':      'Privacidad',
    'footer.legalHref':    '/es/aviso-legal',
    'footer.privacyHref':  '/es/privacidad',
  },

  en: {
    // Nav
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.now':      'Now',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    // Home
    'home.headline.line1': 'Víctor Pariente González',
    'home.headline.line2': 'Software engineer',
    'home.exploring.title':   'Exploring now',

    // About
    'about.title': 'About',
    'about.stack.experience': 'Experience',
    'about.stack.exploring':  'Exploring',

    // Now
    'now.title':           'Now',
    'now.updated':         'Updated',

    // Projects
    'projects.title':       'Projects',
    'projects.empty':
      'Experiments will appear here soon.',

    // Contact
    'contact.title':       'Contact',
    'contact.body':        'If you want to get in touch, here are my links.',
    'contact.linkedin':    'LinkedIn',
    'contact.github':      'GitHub',
    'contact.email':       'Email',

    // Meta descriptions (per page)
    'meta.desc.about':    'Backend engineer with 10+ years of experience. Where I come from, what I build, and the tech I use.',
    'meta.desc.now':      'What I am working on right now: what I am learning, researching and building around AI, machine learning and backend.',
    'meta.desc.projects': 'Master’s thesis on urban accessibility with machine learning, and Amigo Regala, a Secret Santa draw web application.',
    'meta.desc.contact':  'Get in touch with Víctor Pariente — LinkedIn, GitHub and email.',

    // Footer
    'footer.madeWith':     'Built with Astro. Open source on GitHub.',
    'footer.legal':        'Legal notice',
    'footer.privacy':      'Privacy',
    'footer.legalHref':    '/en/legal-notice',
    'footer.privacyHref':  '/en/privacy',
  },
} as const;
