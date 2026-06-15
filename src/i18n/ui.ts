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
    'nav.blog':     'Blog',
    'nav.projects': 'Proyectos',
    'nav.contact':  'Contacto',

    // Home
    'home.headline.line1': 'Víctor Pariente González',
    'home.headline.line2': 'Ingeniero de software',
    'home.subtitle':
      'Ingeniero backend con más de 10 años de experiencia. ' +
      'Ahora mismo en eDreams ODIGEO, intentando aprender todo lo que pueda sobre IA, agentes y diseño de sistemas.',
    'home.exploring.title':   'Explorando ahora',
    'home.recent.title':      'Últimas notas',
    'home.recent.empty':      'No hay entradas todavía.',
    'home.recent.viewAll':    'Ver todas las entradas →',

    // About
    'about.title': 'Sobre mí',
    'about.stack.experience': 'Experiencia',
    'about.stack.exploring':  'Explorando',

    // Now
    'now.title':           'Ahora',
    'now.updated':         'Actualizado',

    // Blog
    'blog.title':          'Blog',
    'blog.description':    'Artículos sobre lo que aprendo y sé.',
    'blog.empty':          'Aún no hay entradas publicadas.',
    'blog.readMore':       'Leer más →',
    'blog.backToList':     '← Volver al blog',
    'blog.publishedOn':    'Publicado el',
    'blog.previous.title': 'Artículos antiguos',
    'blog.previous.note':  'Los escribí en el blog de Profile, mi anterior empresa.',
    'blog.previous.more':  'Ver todos mis artículos en Profile.es →',

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
    'meta.desc.now':      'En qué estoy trabajando ahora mismo: lo que aprendo, investigo y construyo sobre IA, agentes y backend.',
    'meta.desc.projects': 'Experimentos y proyectos personales de Víctor Pariente — backend, IA y herramientas que construyo en mi tiempo libre.',
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
    'nav.blog':     'Blog',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    // Home
    'home.headline.line1': 'Víctor Pariente González',
    'home.headline.line2': 'Software engineer',
    'home.subtitle':
      'Backend engineer with 10+ years of experience. ' +
      'Currently at eDreams ODIGEO, trying to learn as much as I can about AI, agents and system design.',
    'home.exploring.title':   'Exploring now',
    'home.recent.title':      'Recent notes',
    'home.recent.empty':      'No posts yet.',
    'home.recent.viewAll':    'View all posts →',

    // About
    'about.title': 'About',
    'about.stack.experience': 'Experience',
    'about.stack.exploring':  'Exploring',

    // Now
    'now.title':           'Now',
    'now.updated':         'Updated',

    // Blog
    'blog.title':          'Blog',
    'blog.description':    'Articles about what I learn and know.',
    'blog.empty':          'No posts published yet.',
    'blog.readMore':       'Read more →',
    'blog.backToList':     '← Back to blog',
    'blog.publishedOn':    'Published on',
    'blog.previous.title': 'Older articles',
    'blog.previous.note':  'I wrote them on the blog of Profile, my previous company.',
    'blog.previous.more':  'See all my articles on Profile.es →',

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
    'meta.desc.now':      'What I am working on right now: what I am learning, researching and building around AI, agents and backend.',
    'meta.desc.projects': 'Experiments and personal projects by Víctor Pariente — backend, AI and tools I build in my spare time.',
    'meta.desc.contact':  'Get in touch with Víctor Pariente — LinkedIn, GitHub and email.',

    // Footer
    'footer.madeWith':     'Built with Astro. Open source on GitHub.',
    'footer.legal':        'Legal notice',
    'footer.privacy':      'Privacy',
    'footer.legalHref':    '/en/legal-notice',
    'footer.privacyHref':  '/en/privacy',
  },
} as const;
