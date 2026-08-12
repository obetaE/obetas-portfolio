import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectCategories, projects } from '../data/projects';
import { ComingSoonCard } from './ComingSoonCard';
import type { Project, ProjectCategory } from '../types';

const ArrowOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/** A single finished project card. */
const ProjectCard: React.FC<{ project: Project; featured: boolean }> = ({ project, featured }) => {
  const isExternal = project.link?.startsWith('http');

  return (
    <div className={`project-card ${featured ? 'col-span-2' : ''}`}>
      <div className={`project-image ${featured ? 'image-large' : ''}`}>
        <img src={project.img} alt={project.title} className="project-img" loading="lazy" />
      </div>

      <div className="project-info">
        <div className="project-header">
          <div>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-desc">{project.desc}</p>
          </div>

          {project.link &&
            (isExternal ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label={`Visit ${project.title}`}
              >
                <ArrowOutIcon />
              </a>
            ) : (
              <Link
                to={project.link}
                className="project-arrow"
                aria-label={`View the ${project.title} case study`}
              >
                <ArrowOutIcon />
              </Link>
            ))}
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('websites');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentProjects = projects[activeTab] ?? [];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-glow"></div>
      <div className="projects-container">
        <div className="projects-header reveal">
          <div className="section-header">
            <span className="section-number">02</span>
            <div className="section-line"></div>
            <h2 className="section-title">Selected Work</h2>
          </div>

          <div className="project-tabs">
            {projectCategories.map(({ key, label }) => (
              <button
                key={key}
                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grids">
          {/* Only the active grid is rendered; the class is kept so the
              existing .project-grid.active styling still applies. */}
          <div className="project-grid active" data-category={activeTab}>
            {currentProjects.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">📁</div>
                <h3 className="empty-state-title">No projects yet</h3>
                <p className="empty-state-desc">
                  This category is currently empty. Check back soon for new work!
                </p>
              </div>
            ) : (
              currentProjects.map((project, idx) => {
                const featured = project.featured === true && idx === 0;

                return project.ready === false ? (
                  <ComingSoonCard key={project.title} project={project} featured={featured} />
                ) : (
                  <ProjectCard key={project.title} project={project} featured={featured} />
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
