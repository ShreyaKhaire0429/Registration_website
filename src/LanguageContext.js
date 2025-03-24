import React, { createContext, useState, useContext, useEffect } from 'react';
import en from './translations/en.json';
import hi from './translations/hi.json';
import mr from './translations/mr.json';

const LanguageContext = createContext();

// Load language files
const languages = { en, hi, mr };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(languages.en);

  // Change translations when language changes
  useEffect(() => {
    setTranslations(languages[language] || languages.en);
  }, [language]);

  const translate = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
