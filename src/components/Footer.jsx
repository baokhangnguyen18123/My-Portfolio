import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="copyright-text">
            © {currentYear} {t.footer.copyright}
          </p>
          <p className="footer-tech-tag">{t.footer.builtWith}</p>
        </div>

        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label={t.footer.backToTop}
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
