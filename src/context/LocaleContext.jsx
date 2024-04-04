import React, { useState, createContext, useContext, useEffect } from "react";

const LocaleContext = createContext()

export const LocaleProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'id' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LocaleContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
            {children}
        </LocaleContext.Provider>
    )
}

export const useLocale = () => useContext(LocaleContext);
