import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as en from './content.js';
import * as ar from './content.ar.js';

const CONTENT = { en, ar };

const STORAGE_KEY = 'fleethub-lang';

/**
 * Label for the language toggle, in the language it switches TO. It cannot live
 * in content.js/content.ar.js because the button must be able to name the other
 * language while the page is still in the current one.
 */
export const LANG_TOGGLE_LABEL = { en: 'English', ar: 'عربي' };

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ar') {
      return stored;
    }
  } catch {
    // Private mode / blocked storage — fall through to the default.
  }
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Persisting is best-effort; the page still works without it.
    }
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((current) => (current === 'ar' ? 'en' : 'ar'));
  }, []);

  const value = useMemo(
    () => ({
      lang,
      isAr: lang === 'ar',
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      setLang,
      toggle,
    }),
    [lang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return value;
}

/** The whole content module for the active language. */
export function useContent() {
  const { lang } = useLanguage();
  return CONTENT[lang];
}
