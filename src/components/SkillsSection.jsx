import React, { useState, useMemo } from "react";
import { Code2, Database, Sparkles, Wrench, Search, CheckCircle } from "lucide-react";

export default function SkillsSection({ t }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const iconMap = {
    code: <Code2 size={22} className="cat-icon" />,
    database: <Database size={22} className="cat-icon" />,
    sparkles: <Sparkles size={22} className="cat-icon" />,
    tool: <Wrench size={22} className="cat-icon" />
  };

  const filteredCategories = useMemo(() => {
    return t.skills.categories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingItems = cat.items.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          items: matchingItems
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [t.skills.categories, activeCategory, searchQuery]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">{t.skills.badge}</div>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-lead">{t.skills.lead}</p>
        </div>

        {/* Filter Controls Bar */}
        <div className="skills-toolbar">
          <div className="category-filters" role="group" aria-label="Filter skills by domain">
            <button
              type="button"
              className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              {t.skills.filterAll}
            </button>
            {t.skills.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="skill-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder={activeCategory === "all" ? "Tìm kỹ năng (e.g. C#, SQL, AI...)" : "Tìm kiếm..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card glass-panel">
              <div className="skill-category-header">
                <div className="cat-icon-container">
                  {iconMap[cat.icon] || <Code2 size={22} />}
                </div>
                <div>
                  <h3 className="cat-title">{cat.title}</h3>
                  <span className="cat-count">{cat.items.length} kỹ năng / công cụ</span>
                </div>
              </div>

              <ul className="skills-badge-list">
                {cat.items.map((skill) => (
                  <li key={skill} className="skill-pill">
                    <span className="skill-bullet">◆</span>
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="no-skills-found glass-panel">
              <p>Không tìm thấy kỹ năng nào khớp với từ khóa "{searchQuery}".</p>
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Đặt lại bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
