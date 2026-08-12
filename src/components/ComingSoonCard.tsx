import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

/**
 * Coming Soon states, used in two places:
 *
 *  - <ComingSoonCard />  replaces a project card in the grid when `ready: false`
 *  - <ComingSoonPanel /> replaces the case study body on /uiux/:slug
 *
 * Both reuse the existing card styling so an unfinished project still sits
 * comfortably next to finished ones.
 */

const ClockIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Grid card                                                           */
/* ------------------------------------------------------------------ */

interface ComingSoonCardProps {
  project: Project;
  /** Renders at double width with a taller image, matching a featured card. */
  featured?: boolean;
}

export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({ project, featured = false }) => (
  <div className={`project-card project-card-soon ${featured ? 'col-span-2' : ''}`}>
    <div className={`project-image ${featured ? 'image-large' : ''}`}>
      {project.img ? (
        <img src={project.img} alt={project.title} className="project-img" loading="lazy" />
      ) : (
        <div className="project-img-placeholder" aria-hidden="true" />
      )}
      <div className="coming-soon-veil">
        <span className="coming-soon-badge">
          <ClockIcon size={13} />
          Coming Soon
        </span>
      </div>
    </div>

    <div className="project-info">
      <div className="project-header">
        <div>
          <h4 className="project-title">{project.title}</h4>
          <p className="project-desc">{project.desc}</p>
          <p className="coming-soon-note">
            {project.comingSoonNote ?? 'This one is still in progress — check back shortly.'}
          </p>
        </div>

        <div className="project-arrow-disabled" title="Coming Soon" aria-label="Coming soon">
          <ClockIcon size={15} />
        </div>
      </div>

      {project.tags.length > 0 && (
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Full-page panel                                                     */
/* ------------------------------------------------------------------ */

interface ComingSoonPanelProps {
  title: string;
  desc?: string;
  note?: string;
  tags?: string[];
}

export const ComingSoonPanel: React.FC<ComingSoonPanelProps> = ({ title, desc, note, tags }) => (
  <div className="coming-soon-panel">
    <span className="coming-soon-badge">
      <ClockIcon size={13} />
      Coming Soon
    </span>

    <h1 className="cs-hero-title">{title}</h1>

    {desc && <p className="cs-hero-desc">{desc}</p>}

    <p className="coming-soon-note">
      {note ?? 'The full case study for this project is being written up. It will be here shortly.'}
    </p>

    {tags && tags.length > 0 && (
      <div className="project-tags coming-soon-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    )}

    <div className="cs-actions">
      <Link to="/#projects" className="cs-btn cs-btn-primary">
        Browse other work
      </Link>
      <Link to="/#contact" className="cs-btn cs-btn-ghost">
        Ask about this project
      </Link>
    </div>
  </div>
);

export default ComingSoonCard;
