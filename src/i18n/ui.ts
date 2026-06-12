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
    'about.philosophy.title': 'Filosofía',
    'about.philosophy.body':
      'Me importa el código bien hecho, pero soy más práctico que perfeccionista. Tengo una base sólida y la aplico — sin que la búsqueda de lo perfecto se convierta en un obstáculo para avanzar.',

    // Now
    'now.title':           'Ahora',
    'now.updated':         'Actualizado',
    'now.learning.title':  '📚 Aprendiendo',
    'now.building.title':  '🛠️ Construyendo',
    'now.focus.title':     '🎯 Foco profesional',

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
    'about.philosophy.title': 'Philosophy',
    'about.philosophy.body':
      'I care about doing things properly, but I lean practical over perfect. Solid foundations — just not letting them become a reason to slow down.',

    // Now
    'now.title':           'Now',
    'now.updated':         'Updated',
    'now.learning.title':  '📚 Learning',
    'now.building.title':  '🛠️ Building',
    'now.focus.title':     '🎯 Professional focus',

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

    // Footer
    'footer.madeWith':     'Built with Astro. Open source on GitHub.',
    'footer.legal':        'Legal notice',
    'footer.privacy':      'Privacy',
    'footer.legalHref':    '/en/legal-notice',
    'footer.privacyHref':  '/en/privacy',
  },
} as const;
