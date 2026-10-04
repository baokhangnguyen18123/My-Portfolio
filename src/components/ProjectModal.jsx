import React, { useEffect } from "react";
import { X, ExternalLink, GitBranch, Layers, CheckCircle2, ShieldCheck, Database, Cpu } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="modal-panel glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          className="modal-close-btn icon-btn"
          onClick={onClose}
          aria-label={t.projects.modalClose}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="project-category-badge">{project.category}</span>
            <span className="project-featured-badge">Featured Case Study</span>
          </div>
          <h2 id="modal-title" className="modal-title gradient-text">
            {project.title}
          </h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        {/* Project Image Banner */}
        <div className="modal-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="modal-banner-img"
            onError={(e) => {
              if (project.fallbackImage && e.target.src !== project.fallbackImage) {
                e.target.src = project.fallbackImage;
              }
            }}
          />
        </div>

        {/* Modal Body Content */}
        <div className="modal-body-grid">
          {/* Column 1: Problem & Solution */}
          <div className="modal-main-content">
            <section className="modal-section">
              <h3 className="section-subtitle">
                <span className="sub-icon">🎯</span>
                {t.modal.problem}
              </h3>
              <p className="section-text">{project.problem}</p>
            </section>

            <section className="modal-section">
              <h3 className="section-subtitle">
                <span className="sub-icon">💡</span>
                {t.modal.solution}
              </h3>
              <p className="section-text">{project.solution}</p>
            </section>

            <section className="modal-section">
              <h3 className="section-subtitle">
                <span className="sub-icon">🛠</span>
                {t.modal.contribution}
              </h3>
              <p className="section-text">{project.contribution}</p>
            </section>
          </div>

          {/* Column 2: Tech Stack & Metrics Sidebar */}
          <div className="modal-sidebar">
            <div className="sidebar-card glass-subcard">
              <h4 className="sidebar-title">
                <Cpu size={16} />
                {t.modal.techStack}
              </h4>
              <div className="modal-tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="sidebar-card glass-subcard">
                <h4 className="sidebar-title">
                  <Layers size={16} />
                  {t.modal.highlights}
                </h4>
                <div className="modal-metrics-list">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="metric-box-label">{m.label}</span>
                      <strong className="metric-box-val">{m.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-status-box">
              <span className="status-pill status-demo">
                ● {t.projects.liveStatusDemo}
              </span>
              <span className="status-pill status-repo">
                ● {t.projects.liveStatusRepo}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
