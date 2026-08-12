import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ComingSoonPanel } from '../components/ComingSoonCard';
import { findUIUXProject } from '../data';

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const ArrowLeftIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const ChevronLeftIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ScrollIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14" />
    <path d="M19 12l-7 7-7-7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const SectionHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="section-header cs-section-header">
    <span className="section-number">{number}</span>
    <div className="section-line" />
    <h2 className="section-title">{title}</h2>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const UIUXCaseStudyPage: React.FC = () => {
  // The slug is read straight off the URL and matched against either the
  // project's `slug` or its slugified `title`.
  const { slug } = useParams<{ slug: string }>();
  const project = findUIUXProject(slug);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const screenshots = useMemo(() => project?.screenshots ?? [], [project]);
  const total = screenshots.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Arrow-key navigation for the screen carousel.
  useEffect(() => {
    if (total < 2) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handlePrev, handleNext, total]);

  // Reveal-on-scroll, matching the behaviour of the home page sections.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  /* ---------------- Not found ---------------- */

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="cs-page">
          <div className="cs-container">
            <div className="cs-notfound">
              <span className="cs-eyebrow">404</span>
              <h1 className="cs-hero-title">Project not found</h1>
              <p className="cs-hero-desc">
                There is no case study at this address. It may have been renamed, or the link may be
                out of date.
              </p>
              <div className="cs-actions">
                <Link to="/#projects" className="cs-btn cs-btn-primary">
                  Back to projects
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  /* ---------------- Coming soon ---------------- */

  if (project.ready === false) {
    return (
      <>
        <Navbar />
        <section className="cs-page">
          <div className="cs-glow" aria-hidden="true" />
          <div className="cs-container">
            <Link to="/#projects" className="cs-back">
              <ArrowLeftIcon />
              <span>Back to Projects</span>
            </Link>
            <ComingSoonPanel
              title={project.title}
              desc={project.desc}
              note={project.comingSoonNote}
              tags={project.tags}
            />
          </div>
        </section>
        <Footer />
      </>
    );
  }

  /* ---------------- Case study ---------------- */

  const active = screenshots[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 75) handleNext();
    if (touchStart - touchEnd < -75) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Screens grouped by their `group` label, preserving data order.
  const groups = screenshots.reduce<{ name: string; items: { index: number; caption: string }[] }[]>(
    (acc, shot, index) => {
      const name = shot.group ?? 'Screens';
      const existing = acc.find((g) => g.name === name);
      const entry = { index, caption: shot.caption };
      if (existing) existing.items.push(entry);
      else acc.push({ name, items: [entry] });
      return acc;
    },
    [],
  );

  return (
    <>
      <Navbar />

      <section className="cs-page">
        <div className="cs-glow" aria-hidden="true" />

        <div className="cs-container">
          {/* ---------- Back ---------- */}
          <Link to="/#projects" className="cs-back">
            <ArrowLeftIcon />
            <span>Back to Projects</span>
          </Link>

          {/* ---------- Hero ---------- */}
          <header className="cs-hero reveal">
            <span className="cs-eyebrow">UI/UX Case Study</span>
            <h1 className="cs-hero-title">{project.title}</h1>
            {project.tagline && <p className="cs-hero-tagline">{project.tagline}</p>}
            <p className="cs-hero-desc">{project.desc}</p>

            <div className="project-tags cs-hero-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            {project.meta && project.meta.length > 0 && (
              <dl className="cs-meta">
                {project.meta.map((item) => (
                  <div key={item.label} className="cs-meta-item">
                    <dt className="cs-meta-label">{item.label}</dt>
                    <dd className="cs-meta-value">{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </header>

          {/* ---------- Showcase: device + screen index ---------- */}
          {total > 0 && (
            <div className="cs-showcase reveal">
              <div className="cs-device-col">
                <div
                  className="device-mockup"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="device-screen cs-device-screen">
                    <img src={active.src} alt={active.caption} className="cs-device-img" />
                  </div>
                  <div className="device-notch" />
                  {active.tall && (
                    <span className="cs-scroll-hint">
                      <ScrollIcon />
                      Scroll
                    </span>
                  )}
                </div>

                <p className="cs-caption">{active.caption}</p>

                <div className="cs-controls">
                  <button onClick={handlePrev} className="cs-ctrl" aria-label="Previous screen">
                    <ChevronLeftIcon />
                  </button>

                  <span className="cs-counter">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>

                  <button onClick={handleNext} className="cs-ctrl" aria-label="Next screen">
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>

              <div className="cs-index-col">
                <h3 className="cs-block-title">Screen index</h3>
                <p className="cs-block-lede">
                  {total} frames across {groups.length} stages. Select one to view it in the device,
                  or use the arrow keys.
                </p>

                {groups.map((group) => (
                  <div key={group.name} className="cs-group">
                    <h4 className="cs-group-name">{group.name}</h4>
                    <ul className="cs-group-list">
                      {group.items.map((item) => (
                        <li key={item.index}>
                          <button
                            className={`cs-group-item ${item.index === currentIndex ? 'is-active' : ''}`}
                            onClick={() => setCurrentIndex(item.index)}
                          >
                            <span className="cs-group-num">
                              {String(item.index + 1).padStart(2, '0')}
                            </span>
                            <span className="cs-group-label">{item.caption}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---------- Overview ---------- */}
          {project.overview && project.overview.length > 0 && (
            <section className="cs-section reveal">
              <SectionHeading number="01" title="Overview" />
              <div className="cs-prose">
                {project.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Problem & solution ---------- */}
          {(project.problems?.length || project.solutions?.length) && (
            <section className="cs-section reveal">
              <SectionHeading number="02" title="Problem & Approach" />
              <div className="cs-split">
                {project.problems && project.problems.length > 0 && (
                  <div className="cs-split-col">
                    <h3 className="cs-block-title">
                      <span className="cs-dot cs-dot-problem" />
                      The problems
                    </h3>
                    <ul className="cs-insight-list">
                      {project.problems.map((item) => (
                        <li key={item.title} className="cs-insight">
                          <h4 className="cs-insight-title">{item.title}</h4>
                          <p className="cs-insight-desc">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && project.solutions.length > 0 && (
                  <div className="cs-split-col">
                    <h3 className="cs-block-title">
                      <span className="cs-dot cs-dot-solution" />
                      The response
                    </h3>
                    <ul className="cs-insight-list">
                      {project.solutions.map((item) => (
                        <li key={item.title} className="cs-insight">
                          <h4 className="cs-insight-title">{item.title}</h4>
                          <p className="cs-insight-desc">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Process ---------- */}
          {project.process && project.process.length > 0 && (
            <section className="cs-section reveal">
              <SectionHeading number="03" title="Design Process" />
              <ol className="cs-process">
                {project.process.map((step, i) => (
                  <li key={step.title} className="cs-step">
                    <span className="cs-step-num">{String(i + 1).padStart(2, '0')}</span>
                    <h4 className="cs-step-title">{step.title}</h4>
                    <p className="cs-step-desc">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* ---------- Flows ---------- */}
          {project.flows && project.flows.length > 0 && (
            <section className="cs-section reveal">
              <SectionHeading number="04" title="User Flows" />
              <div className="cs-flows">
                {project.flows.map((flow) => (
                  <div key={flow.name} className="cs-flow">
                    <h4 className="cs-flow-name">{flow.name}</h4>
                    <div className="cs-flow-steps">
                      {flow.steps.map((step, i) => (
                        <React.Fragment key={step}>
                          <span className="cs-flow-step">{step}</span>
                          {i < flow.steps.length - 1 && (
                            <span className="cs-flow-arrow" aria-hidden="true">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Style guide ---------- */}
          {(project.palette?.length || project.typography?.length) && (
            <section className="cs-section reveal">
              <SectionHeading number="05" title="Visual System" />
              <div className="cs-system">
                {project.palette && project.palette.length > 0 && (
                  <div className="cs-system-block">
                    <h3 className="cs-block-title">Colour</h3>
                    <div className="cs-swatches">
                      {project.palette.map((colour) => (
                        <div key={colour.hex} className="cs-swatch">
                          <span className="cs-swatch-chip" style={{ background: colour.hex }} />
                          <span className="cs-swatch-name">{colour.name}</span>
                          <span className="cs-swatch-hex">{colour.hex}</span>
                          {colour.usage && <span className="cs-swatch-usage">{colour.usage}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.typography && project.typography.length > 0 && (
                  <div className="cs-system-block">
                    <h3 className="cs-block-title">Type</h3>
                    <ul className="cs-type-list">
                      {project.typography.map((type) => (
                        <li key={type.role} className="cs-type">
                          <span className="cs-type-role">{type.role}</span>
                          <span className="cs-type-name">{type.name}</span>
                          {type.usage && <span className="cs-type-usage">{type.usage}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Outcomes & next steps ---------- */}
          {(project.outcomes?.length || project.nextSteps?.length) && (
            <section className="cs-section reveal">
              <SectionHeading number="06" title="Outcome" />
              <div className="cs-split">
                {project.outcomes && project.outcomes.length > 0 && (
                  <div className="cs-split-col">
                    <h3 className="cs-block-title">What shipped</h3>
                    <ul className="cs-bullets">
                      {project.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.nextSteps && project.nextSteps.length > 0 && (
                  <div className="cs-split-col">
                    <h3 className="cs-block-title">Where it goes next</h3>
                    <ul className="cs-bullets cs-bullets-muted">
                      {project.nextSteps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- CTA ---------- */}
          <div className="cs-cta reveal">
            <h3 className="cs-cta-title">Want to see the working file?</h3>
            <p className="cs-cta-desc">
              The Figma file and interactive prototype are shared on request — happy to walk through
              the decisions behind any screen here.
            </p>
            <div className="cs-actions">
              <Link to="/#contact" className="cs-btn cs-btn-primary">
                Get in touch
              </Link>
              <Link to="/#projects" className="cs-btn cs-btn-ghost">
                View more projects
              </Link>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-ghost">
                  Live prototype
                </a>
              )}
              {project.figmaLink && (
                <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-ghost">
                  Open in Figma
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UIUXCaseStudyPage;
