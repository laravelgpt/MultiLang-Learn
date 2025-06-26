
"use client";

import { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { translations, type Language } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en, replacements?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && translations[storedLanguage]) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  const t = useCallback((key: keyof typeof translations.en, replacements: Record<string, string | number> = {}) => {
    // Fallback to English if a translation is missing in the current language
    let translation = translations[language]?.[key] || translations['en'][key] || key;
    
    Object.keys(replacements).forEach(rKey => {
        const replacement = replacements[rKey];
        // Use a regex with the 'g' flag to replace all occurrences
        translation = translation.replace(new RegExp(`\\{${rKey}\\}`, 'g'), String(replacement));
    });

    return translation;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
