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

export function switchLang(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  const currentLang = segments[0] as Lang;
  if (currentLang in ui) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }
  return '/' + segments.join('/');
}
