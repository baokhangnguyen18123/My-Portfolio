import React from "react";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from "lucide-react";

export default function EducationSection({ t }) {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">{t.education.badge}</div>
          <h2 className="section-title">{t.education.title}</h2>
        </div>

        {/* Education Credentials Card */}
        <div className="education-card glass-panel">
          <div className="edu-top-row">
            <div className="edu-school-group">
              <div className="edu-icon-badge">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="edu-degree">{t.education.degree}</h3>
                <p className="edu-major gradient-text">{t.education.major}</p>
                <p className="edu-school">{t.education.school}</p>
              </div>
            </div>

            <div className="edu-meta-badges">
              <div className="meta-badge-box">
                <Calendar size={14} className="meta-badge-icon" />
                <span>{t.education.period}</span>
              </div>
              <div className="meta-badge-box distinction-badge">
                <Award size={14} className="meta-badge-icon" />
                <span>{t.education.gpa}</span>
                <strong>({t.education.classification})</strong>
              </div>
            </div>
          </div>

          <hr className="edu-divider" />

          {/* Highlights */}
          <div className="edu-highlights">
            <h4 className="highlights-title">
              <BookOpen size={16} />
              {t.education.highlightsTitle}
            </h4>
            <div className="highlights-grid">
              {t.education.highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle size={15} className="highlight-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
