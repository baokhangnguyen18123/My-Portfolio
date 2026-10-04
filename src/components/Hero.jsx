import React, { useState, useEffect } from "react";
import { Download, FileText, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

export default function Hero({ t, theme }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Rotate roles automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  const currentProcess = t.hero.process[activeStep] || t.hero.process[0];

  return (
    <section id="hero" className="hero-section">
      <HeroCanvas theme={theme} />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-badge" role="status">
            <span className="pulse-dot">
              <span className="pulse-ring"></span>
            </span>
            <span className="status-text">{t.hero.statusBadge}</span>
          </div>

          {/* Greeting & Headline */}
          <div className="hero-header">
            <p className="hero-tagline">{t.hero.tagline}</p>
            <h1 className="hero-title">
              <span className="greeting-line">{t.hero.greeting}</span>
              <span className="name-highlight gradient-text">{t.hero.name}</span>
            </h1>

            {/* Dynamic Role Cycler */}
            <div className="role-cycler-container" aria-live="polite">
              <span className="role-prefix">&gt; </span>
              <span className="role-text" key={roleIndex}>
                {t.hero.roles[roleIndex]}
              </span>
              <span className="blinking-cursor">|</span>
            </div>
          </div>

          {/* Intro Description */}
          <p className="hero-summary">{t.hero.summary}</p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href="assets/files/BusinessAnalyst-NguyenBaoKhang.pdf"
              download="BusinessAnalyst-NguyenBaoKhang.pdf"
              className="btn btn-outline cv-btn"
              title="Download Business Analyst Resume"
            >
              <Download size={16} className="btn-icon" />
              <span>{t.hero.downloadBA}</span>
              <span className="file-badge">PDF · 58KB</span>
            </a>

            <a
              href="assets/files/Fresher.NETDeveloper-NguyenBaoKhang.pdf"
              download="Fresher.NETDeveloper-NguyenBaoKhang.pdf"
              className="btn btn-outline cv-btn"
              title="Download .NET Developer Resume"
            >
              <Download size={16} className="btn-icon" />
              <span>{t.hero.downloadDotNet}</span>
              <span className="file-badge">PDF · 53KB</span>
            </a>

            <a href="#projects" className="btn btn-primary explore-btn">
              <span>{t.hero.exploreProjects}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Interactive Delivery Pipeline Bento Card */}
        <div className="hero-visual-card">
          <div className="card-glass-header">
            <div className="header-status-indicator">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="visual-title">{t.hero.processHeading}</span>
            <span className="pill-badge">Agile / End-to-End</span>
          </div>

          <p className="pipeline-hint">{t.hero.processSubtitle}</p>

          {/* 4 Process Step Tabs */}
          <div className="process-timeline" role="tablist">
            {t.hero.process.map((p, idx) => (
              <button
                key={p.step}
                type="button"
                role="tab"
                aria-selected={activeStep === idx}
                className={`process-step-btn ${activeStep === idx ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-number">{p.step}</div>
                <div className="step-name">{p.name}</div>
                {activeStep === idx && <div className="step-glow-indicator" />}
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Box */}
          <div className="process-detail-box" key={currentProcess.step}>
            <div className="detail-top">
              <span className="detail-step-badge">Stage {currentProcess.step} · {currentProcess.name}</span>
              <span className="detail-en-name">{currentProcess.enName}</span>
            </div>
            <p className="detail-desc">{currentProcess.desc}</p>
            <div className="detail-tools">
              <span className="tools-label">Deliverables &amp; Tooling:</span>
              <div className="tool-tags">
                {currentProcess.tools.map((tool) => (
                  <span key={tool} className="tool-tag">
                    <CheckCircle2 size={12} className="tag-check" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
