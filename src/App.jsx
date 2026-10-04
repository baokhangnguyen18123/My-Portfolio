import React, { useState, useEffect, useCallback } from "react";
import { translations } from "./data/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBento from "./components/AboutBento";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("bao-khang-theme") || "dark";
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("bao-khang-language") || "vi";
  });

  const [toastMessage, setToastMessage] = useState(null);

  // Sync theme attribute to <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bao-khang-theme", theme);
  }, [theme]);

  // Sync language and metadata
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("bao-khang-language", lang);

    const currentT = translations[lang] || translations.vi;
    document.title = currentT.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", currentT.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", currentT.meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", currentT.meta.ogDescription);
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  }, []);

  const currentT = translations[lang] || translations.vi;

  return (
    <div className={`app-root theme-${theme}`}>
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        t={currentT}
      />

      <main id="main-content">
        <Hero t={currentT} theme={theme} />
        <AboutBento t={currentT} />
        <SkillsSection t={currentT} />
        <ProjectsSection t={currentT} />
        <EducationSection t={currentT} />
        <ContactSection t={currentT} showToast={showToast} />
      </main>

      <Footer t={currentT} />
      <Toast message={toastMessage} />
    </div>
  );
}
