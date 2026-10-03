import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ComingSoonPanel } from '../components/ComingSoonCard';
import { Phone } from '../components/Phone';
import { findMobileApp } from '../data';

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const ArrowLeftIcon = () => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

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

const MobileAppCaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = findMobileApp(slug);

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
              <h1 className="cs-hero-title">App not found</h1>
              <p className="cs-hero-desc">
                There is no case study at this address. It may have been renamed, or the link may be
                out of date.
              </p>
              <div className="cs-actions">
                <Link to="/#projects" className="cs-btn cs-btn-primary">Back to projects</Link>
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
              tags={project.tags ?? []}
            />
          </div>
        </section>
        <Footer />
      </>
    );
  }

  /* ---------------- Case study ---------------- */

  // Section numbers are assigned in the order sections actually render,
  // so skipping a section never leaves a gap in the numbering.
  let sectionCounter = 0;
  const num = () => String(++sectionCounter).padStart(2, '0');

  const heroScreens = project.heroScreens ?? [];
  const features = project.features ?? [];
  const vs = project.visualSystem;
  const arch = project.architecture;

  return (
    <>
      <Navbar />

      <section className="cs-page sw-page">
        <div className="sw-page-glow" aria-hidden="true" />

        <div className="cs-container">
          <Link to="/#projects" className="cs-back">
            <ArrowLeftIcon />
            <span>Back to Projects</span>
          </Link>

          {/* ---------- Hero ---------- */}
          <header className="sw-hero-grid">
            <div className="sw-hero-copy reveal">
              <span className="cs-eyebrow">Mobile App · Case Study</span>
              <div className="sw-title-row">
                {project.logo && (
                  <img src={project.logo} alt="" width={56} height={56} />
                )}
                <h1 className="cs-hero-title">{project.title}</h1>
              </div>
              {project.tagline && (
                <p className="cs-hero-tagline">{project.tagline}</p>
              )}
              <p className="cs-hero-desc">{project.desc}</p>

              {(project.installUrl || project.apiUrl) && (
                <div className="cs-actions">
                  {project.installUrl && (
                    <a
                      href={project.installUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-btn cs-btn-primary"
                    >
                      {project.installLabel ?? 'Install'}
                    </a>
                  )}
                  {project.apiUrl && (
                    <a
                      href={project.apiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-btn cs-btn-ghost"
                    >
                      {project.apiLabel ?? 'Live status'}
                    </a>
                  )}
                </div>
              )}
            </div>

            {heroScreens.length > 0 && (
              <div className="sw-hero-devices" aria-label={`${project.title} screens`}>
                {heroScreens.map((s) => (
                  <Phone
                    key={s.label}
                    label={s.label}
                    className={`sw-hero-phone sw-hero-${s.position}`}
                  >
                    {s.screen}
                  </Phone>
                ))}
              </div>
            )}
          </header>

          {/* ---------- Meta ---------- */}
          {project.meta && project.meta.length > 0 && (
            <dl className="cs-meta sw-meta reveal">
              {project.meta.map((item) => (
                <div key={item.label} className="cs-meta-item">
                  <dt className="cs-meta-label">{item.label}</dt>
                  <dd className="cs-meta-value">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {/* ---------- 01 Overview ---------- */}
          {project.overview && (
            <section className="cs-section reveal">
              <SectionHeading number={num()} title="Overview" />
              <div className="cs-split">
                <div className="cs-split-col">
                  <h3 className="cs-block-title">
                    <span className="cs-dot cs-dot-problem" />
                    The problem
                  </h3>
                  <div className="cs-prose">
                    {project.overview.problem.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
                <div className="cs-split-col">
                  <h3 className="cs-block-title">
                    <span className="cs-dot cs-dot-solution" />
                    The response
                  </h3>
                  <div className="cs-prose">
                    {project.overview.response.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ---------- 02 Key screens ---------- */}
          {features.length > 0 && (
            <section className="cs-section">
              <div className="reveal">
                <SectionHeading number={num()} title="Key Screens" />
                {project.featuresNote && (
                  <p className="sw-note sw-note-intro">{project.featuresNote}</p>
                )}
              </div>

              <div className="sw-features">
                {features.map((f, i) => (
                  <article
                    key={f.kicker}
                    className={`sw-feature reveal ${i % 2 ? 'is-flipped' : ''}`}
                  >
                    <div className="sw-feature-device">
                      <Phone label={f.label}>{f.screen}</Phone>
                      <div className="sw-float-chips" aria-hidden="true">
                        {f.chips.map((chip) => <span key={chip}>{chip}</span>)}
                      </div>
                    </div>
                    <div className="sw-feature-copy">
                      <span className="sw-feature-num">
                        / {String(i + 1).padStart(2, '0')} — {f.kicker}
                      </span>
                      <h3 className="sw-feature-title">{f.title}</h3>
                      <p className="sw-feature-desc">{f.desc}</p>
                      <ul className="cs-bullets">
                        {f.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ---------- 03 Visual system ---------- */}
          {vs && (vs.types?.length || vs.palette?.length) && (
            <section className="cs-section reveal">
              <SectionHeading number={num()} title="Visual System" />

              {vs.types && vs.types.length > 0 && (
                <div className="sw-type-grid">
                  {vs.types.map((t) => (
                    <div key={t.name} className="sw-type-card">
                      <span className="cs-type-role">{t.role}</span>
                      <p className={`sw-type-name ${t.fontClassName}`}>{t.name}</p>
                      {t.weights && <span className="sw-type-weights">{t.weights}</span>}
                      {t.sample && (
                        <p className={`sw-type-sample ${t.fontClassName}`}>{t.sample}</p>
                      )}
                      {t.alphabet && (
                        <p className={`sw-type-alphabet ${t.fontClassName}`}>
                          {t.alphabet.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {i > 0 && <br />}
                              {line}
                            </React.Fragment>
                          ))}
                        </p>
                      )}
                      <span className="cs-type-usage">{t.usage}</span>
                    </div>
                  ))}
                </div>
              )}

              {vs.palette && vs.palette.length > 0 && (
                <div className="sw-palette">
                  {vs.palette.map((c) => (
                    <div key={c.hex} className="sw-swatch">
                      <span className="sw-swatch-chip" style={{ background: c.hex }} />
                      <span className="cs-swatch-name">{c.name}</span>
                      <span className="cs-swatch-hex">{c.hex}</span>
                    </div>
                  ))}
                </div>
              )}

              {vs.note && <p className="sw-note">{vs.note}</p>}
            </section>
          )}

          {/* ---------- 04 Architecture ---------- */}
          {arch && (
            <section className="cs-section reveal">
              <SectionHeading number={num()} title="How It Works" />

              <div className="sw-arch" role="img" aria-label={arch.ariaLabel}>
                {arch.flow.map((item, i) => {
                  if (item.type === 'link') {
                    return (
                      <div key={i} className="sw-arch-link">
                        <span>{item.label}</span>
                      </div>
                    );
                  }
                  if (item.type === 'group') {
                    return (
                      <div key={i} className="sw-arch-group">
                        {item.nodes.map((n) => (
                          <div key={n.title} className="sw-arch-node">
                            <b>{n.title}</b>
                            <span>{n.desc}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className={`sw-arch-node${item.core ? ' is-core' : ''}`}
                    >
                      {item.small && <small>{item.small}</small>}
                      <b>{item.title}</b>
                      <span>{item.desc}</span>
                    </div>
                  );
                })}
              </div>

              {arch.decisions && arch.decisions.length > 0 && (
                <ul className="cs-insight-list sw-decisions">
                  {arch.decisions.map((d) => (
                    <li key={d.title} className="cs-insight">
                      <h4 className="cs-insight-title">{d.title}</h4>
                      <p className="cs-insight-desc">{d.desc}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* ---------- 05 Stack ---------- */}
          {project.stack && project.stack.length > 0 && (
            <section className="cs-section reveal">
              <SectionHeading number={num()} title="Built With" />
              <div className="project-tags sw-stack-tags">
                {project.stack.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </section>
          )}

          {/* ---------- 06 Outcome ---------- */}
          {project.outcome && (
            <section className="cs-section reveal">
              <SectionHeading number={num()} title="Outcome" />
              <div className="cs-split">
                <div className="cs-split-col">
                  <h3 className="cs-block-title">
                    {project.outcome.shippedTitle ?? 'What shipped'}
                  </h3>
                  <ul className="cs-bullets">
                    {project.outcome.shipped.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="cs-split-col">
                  <h3 className="cs-block-title">
                    {project.outcome.nextTitle ?? 'Where it goes next'}
                  </h3>
                  <ul className="cs-bullets cs-bullets-muted">
                    {project.outcome.nextSteps.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* ---------- CTA ---------- */}
          {project.cta && (
            <div className="cs-cta reveal">
              <h3 className="cs-cta-title">{project.cta.title}</h3>
              <p className="cs-cta-desc">{project.cta.desc}</p>
              <div className="cs-actions">
                {project.installUrl && (
                  <a
                    href={project.installUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-btn cs-btn-primary"
                  >
                    {project.installLabel ?? 'Install'}
                  </a>
                )}
                <Link to="/#contact" className="cs-btn cs-btn-ghost">Get in touch</Link>
                <Link to="/#projects" className="cs-btn cs-btn-ghost">View more projects</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MobileAppCaseStudyPage;