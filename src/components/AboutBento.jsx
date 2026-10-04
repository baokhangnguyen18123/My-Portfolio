import React from "react";
import { Workflow, Database, Layers, Award, GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function AboutBento({ t }) {
  const pillarIcons = [
    <Workflow className="pillar-icon" size={24} key="workflow" />,
    <Database className="pillar-icon" size={24} key="database" />,
    <Layers className="pillar-icon" size={24} key="layers" />
  ];

  const statIcons = [
    <GraduationCap size={20} key="grad" />,
    <Award size={20} key="award" />,
    <Sparkles size={20} key="sparkle" />,
    <MapPin size={20} key="pin" />
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">{t.about.badge}</div>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-lead">{t.about.lead}</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* Card 1: System Analysis (Span 2) */}
          <div className="bento-card bento-card-wide glass-panel">
            <div className="bento-card-header">
              <div className="icon-wrapper primary-glow">
                {pillarIcons[0]}
              </div>
              <span className="card-index-label">{t.about.pillars[0].number}</span>
            </div>
            <h3 className="bento-card-title">{t.about.pillars[0].title}</h3>
            <p className="bento-card-desc">{t.about.pillars[0].text}</p>

            {/* Interactive Architecture Flow Miniature */}
            <div className="mini-workflow-diagram" aria-hidden="true">
              <div className="flow-node">User Problem</div>
              <span className="flow-arrow">→</span>
              <div className="flow-node flow-node-active">BPMN Flow</div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">User Stories</div>
              <span className="flow-arrow">→</span>
              <div className="flow-node flow-node-tech">Executable Spec</div>
            </div>

            <div className="pill-tag-group">
              {t.about.pillars[0].tags.map((tag) => (
                <span key={tag} className="meta-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 2: Data Mindset (Span 1) */}
          <div className="bento-card glass-panel">
            <div className="bento-card-header">
              <div className="icon-wrapper cyan-glow">
                {pillarIcons[1]}
              </div>
              <span className="card-index-label">{t.about.pillars[1].number}</span>
            </div>
            <h3 className="bento-card-title">{t.about.pillars[1].title}</h3>
            <p className="bento-card-desc">{t.about.pillars[1].text}</p>
            <div className="pill-tag-group">
              {t.about.pillars[1].tags.map((tag) => (
                <span key={tag} className="meta-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 3: Practical Delivery & Maintainability (Span 1) */}
          <div className="bento-card glass-panel">
            <div className="bento-card-header">
              <div className="icon-wrapper indigo-glow">
                {pillarIcons[2]}
              </div>
              <span className="card-index-label">{t.about.pillars[2].number}</span>
            </div>
            <h3 className="bento-card-title">{t.about.pillars[2].title}</h3>
            <p className="bento-card-desc">{t.about.pillars[2].text}</p>
            <div className="pill-tag-group">
              {t.about.pillars[2].tags.map((tag) => (
                <span key={tag} className="meta-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 4: Career & Academic Stats Deck (Span 2) */}
          <div className="bento-card bento-card-wide stats-bento-card glass-panel">
            <div className="stats-grid">
              {t.about.stats.map((stat, idx) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-header">
                    <span className="stat-icon">{statIcons[idx]}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-sub">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
