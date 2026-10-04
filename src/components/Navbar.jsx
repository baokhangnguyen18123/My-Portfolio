import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar({ lang, setLang, theme, toggleTheme, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#skills", label: t.nav.skills, id: "skills" },
    { href: "#projects", label: t.nav.projects, id: "projects" },
    { href: "#education", label: t.nav.education, id: "education" },
    { href: "#contact", label: t.nav.contact, id: "contact" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#hero" className="brand" aria-label="Nguyen Bao Khang Portfolio">
          <div className="brand-badge">
            <span>BK</span>
          </div>
          <span className="brand-name">
            Bảo Khang<span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                >
                  {link.label}
                  {activeSection === link.id && <span className="nav-indicator" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action Controls */}
        <div className="header-actions">
          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${lang === "vi" ? "active" : ""}`}
              onClick={() => setLang("vi")}
              aria-pressed={lang === "vi"}
              title="Tiếng Việt"
            >
              VI
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle-btn icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="icon sun-icon" size={18} />
            ) : (
              <Moon className="icon moon-icon" size={18} />
            )}
          </button>

          {/* Contact Direct Button */}
          <a href="#contact" className="btn btn-primary btn-sm header-cta">
            <span>{t.nav.contact}</span>
            <ArrowUpRight size={14} className="cta-arrow" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle icon-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-drawer-footer">
              <a
                href="#contact"
                className="btn btn-primary btn-full"
                onClick={handleLinkClick}
              >
                <span>{t.nav.contact}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
