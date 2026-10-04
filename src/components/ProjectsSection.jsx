import React, { useState } from "react";
import { ArrowUpRight, Layers, ExternalLink, Sparkles, Server } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">{t.projects.badge}</div>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-lead">{t.projects.lead}</p>
        </div>

        {/* Projects Cards List */}
        <div className="projects-grid">
          {t.projects.items.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card glass-panel ${project.featured ? "project-card-featured" : ""}`}
            >
              {/* Image Preview with Hover Zoom */}
              <div
                className="project-image-container"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-preview-img"
                  onError={(e) => {
                    if (project.fallbackImage && e.target.src !== project.fallbackImage) {
                      e.target.src = project.fallbackImage;
                    }
                  }}
                />
                <div className="image-overlay-badge">
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Project Card Information */}
              <div className="project-card-content">
                <div className="project-meta-top">
                  <span className="project-category-tag">{project.category}</span>
                  {project.featured && (
                    <span className="featured-tag">
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="project-card-title">
                  <button
                    type="button"
                    className="title-link-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                    <ArrowUpRight size={18} className="title-arrow" />
                  </button>
                </h3>

                <p className="project-card-subtitle">{project.subtitle}</p>
                <p className="project-card-summary">{project.summary}</p>

                {/* Tech Badges */}
                <div className="project-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="meta-pill">{tag}</span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm view-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <div className="project-status-indicators">
                    <span className="status-indicator-badge">
                      {t.projects.liveStatusDemo}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        t={t}
      />
    </section>
  );
}
