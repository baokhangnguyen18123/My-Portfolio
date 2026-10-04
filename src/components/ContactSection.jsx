import React, { useState, useEffect } from "react";
import { Mail, Copy, Check, ExternalLink, MapPin, Clock, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

function GithubIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactSection({ t, showToast }) {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");

  // Live Ho Chi Minh City clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.emailAddress);
      setCopied(true);
      showToast(t.contact.copiedEmail);

      // Trigger colorful confetti celebration!
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#10b981", "#06b6d4", "#6366f1", "#f59e0b"]
      });

      setTimeout(() => setCopied(false), 2800);
    } catch (err) {
      showToast("Email: " + t.contact.emailAddress);
    }
  };

  const handleTemplateClick = (template) => {
    const mailtoUrl = `mailto:${t.contact.emailAddress}?subject=${encodeURIComponent(
      template.subject
    )}&body=${encodeURIComponent(template.body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">{t.contact.badge}</div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-lead">{t.contact.lead}</p>
        </div>

        {/* Contact Channels Grid */}
        <div className="contact-grid">
          {/* Main Email Card */}
          <div className="contact-card email-card glass-panel">
            <div className="contact-card-top">
              <div className="contact-icon-wrapper email-glow">
                <Mail size={24} />
              </div>
              <span className="contact-channel-tag">Primary Channel</span>
            </div>

            <h3 className="contact-card-title">{t.contact.emailCardTitle}</h3>
            <div className="email-display-box">
              <span className="email-text">{t.contact.emailAddress}</span>
            </div>

            <div className="contact-actions-row">
              <button
                type="button"
                className={`btn btn-outline btn-sm copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopyEmail}
                aria-label={t.contact.copyEmail}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? t.contact.copiedEmail : t.contact.copyEmail}</span>
              </button>

              <a
                href={`mailto:${t.contact.emailAddress}`}
                className="btn btn-primary btn-sm direct-mail-btn"
              >
                <Send size={15} />
                <span>{t.contact.sendEmail}</span>
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com/baokhangnguyen18123"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card github-card glass-panel"
            aria-label="Visit Nguyen Bao Khang GitHub profile"
          >
            <div className="contact-card-top">
              <div className="contact-icon-wrapper github-glow">
                <GithubIcon size={24} />
              </div>
              <ExternalLink size={16} className="card-external-arrow" />
            </div>

            <h3 className="contact-card-title">{t.contact.githubTitle}</h3>
            <p className="contact-card-handle">@{t.contact.githubUser}</p>
            <p className="contact-card-desc">{t.contact.githubDesc}</p>
          </a>

          {/* Location & Real-time Clock Card */}
          <div className="contact-card location-card glass-panel">
            <div className="contact-card-top">
              <div className="contact-icon-wrapper location-glow">
                <MapPin size={24} />
              </div>
              <div className="live-clock-pill">
                <Clock size={12} className="clock-icon" />
                <span>{localTime || "12:00:00"} ICT</span>
              </div>
            </div>

            <h3 className="contact-card-title">{t.contact.locationTitle}</h3>
            <p className="location-city gradient-text">{t.contact.locationValue}</p>
            <p className="contact-card-desc">{t.contact.locationDesc}</p>
          </div>
        </div>

        {/* Quick Inquiry Templates */}
        <div className="quick-templates-section glass-panel">
          <div className="templates-header">
            <Sparkles size={18} className="template-sparkle" />
            <h4 className="templates-title">{t.contact.quickTemplateTitle}</h4>
          </div>
          <div className="templates-grid">
            {t.contact.quickTemplates.map((template, idx) => (
              <button
                key={idx}
                type="button"
                className="template-pill-btn"
                onClick={() => handleTemplateClick(template)}
              >
                <span>{template.label}</span>
                <Send size={13} className="template-send-icon" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
