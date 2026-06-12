import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

// Routes whose slug differs between languages. Anything not listed here
// keeps the same slug across locales (e.g. /es/about ↔ /en/about).
const localizedRoutes: Array<Record<Lang, string>> = [
  { es: '/aviso-legal', en: '/legal-notice' },
  { es: '/privacidad', en: '/privacy' },
];

export function switchLang(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  const currentLang = segments[0] as Lang;
  const hasLang = currentLang in ui;
  const sourceLang: Lang = hasLang ? currentLang : defaultLang;
  const rest = '/' + (hasLang ? segments.slice(1) : segments).join('/');

  const match = localizedRoutes.find((route) => route[sourceLang] === rest);
  const targetRest = match ? match[targetLang] : rest;

  return targetRest === '/' ? `/${targetLang}` : `/${targetLang}${targetRest}`;
}
