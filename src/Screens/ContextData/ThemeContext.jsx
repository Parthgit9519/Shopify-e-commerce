// src/Screens/ContextData/ThemeContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   const getInitial = () => {
      try {
         const saved = localStorage.getItem("theme");
         if (saved) return saved;
         return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      } catch (e) {
         return "light";
      }
   };

   const [theme, setTheme] = useState(getInitial);

   useEffect(() => {
      try { localStorage.setItem("theme", theme); } catch (e) { }
      if (theme === "dark") {
         document.documentElement.classList.add("dark-theme");
      } else {
         document.documentElement.classList.remove("dark-theme");
      }
   }, [theme]);

   const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
