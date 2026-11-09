import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ui, type UiStrings } from './ui';

export type Lang = 'en' | 'ar';
/** A piece of text available in both languages. */
export type Bi = { en: string; ar: string };

const STORAGE_KEY = 'codey-lang';

function getInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') return saved;
  } catch {
    // Storage can be blocked; fall back to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

interface LangValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  t: UiStrings;
  /** Pick the current-language variant of a bilingual value. */
  tr: (value: Bi) => string;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title = ui[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang].meta.description);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // The language still applies for this visit.
    }
  }, [lang, dir]);

  const value = useMemo<LangValue>(() => ({
    lang,
    dir,
    t: ui[lang],
    tr: (v) => v[lang],
    setLang,
    toggleLang: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
  }), [lang, dir]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
