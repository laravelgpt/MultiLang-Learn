
"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from 'react';

export type LanguageId = 'all' | 'js' | 'py' | 'go' | 'rust' | 'java' | 'cpp' | 'pascal';

type ProgrammingLanguageContextType = {
  selectedLanguage: LanguageId;
  setSelectedLanguage: (language: LanguageId) => void;
};

const ProgrammingLanguageContext = createContext<ProgrammingLanguageContextType | undefined>(undefined);

export function ProgrammingLanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageId>('all');

  const value = useMemo(() => ({
    selectedLanguage,
    setSelectedLanguage,
  }), [selectedLanguage]);

  return (
    <ProgrammingLanguageContext.Provider value={value}>
      {children}
    </ProgrammingLanguageContext.Provider>
  );
}

export function useProgrammingLanguage() {
  const context = useContext(ProgrammingLanguageContext);
  if (!context) {
    throw new Error('useProgrammingLanguage must be used within a ProgrammingLanguageProvider');
  }
  return context;
}
