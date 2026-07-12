import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  img: string;
  link?: string; // added optional link field
}

const projects: Record<string, Project[]> = {
  websites: [
    {
      title: "Gamma Suites",
      desc: "A vibrant, modern hotel website built with React and Next.js, featuring an engaging dark theme, interactive sections, and responsive design.",
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
      img: "GammaSuites.PNG",
      link: "https://gammasuites.vercel.app/"
    },
    {
      title: "Verve Digital",
      desc: "Senior-focused music distribution platform combining luxury design with accessibility",
      tags: ["Next.js", "Node.js", "MongoDB", "Express"],
      img: "/VD.PNG",
      link: "https://verve-digital.vercel.app/"
    },
    {
      title: "Soft Roots",
      desc: "This is a dealer company focused on selling customizable trucks to their users",
      tags: ["Next.js", "Node.js", "MongoDB", "Express"],
      img: "/softroots.PNG",
      link: "https://soft-roots.vercel.app/"
    },
    {
      title: "Aces Week Registration Site",
      desc: "This is a registration website used to get feedback from an already built in audience for possible expectations for an event",
      tags: ["Next.js", "Node.js", "MongoDB", "CSS"],
      img: "/vol.PNG",
      link: "https://techfest-three.vercel.app/"
    },
    {
      title: "TechFest Jam",
      desc: "This is a live voting platform used to monitor the live votings for an event",
      tags: ["Next.js", "Node.js", "MongoDB", "CSS"],
      img: "/vote.PNG",
      link: "https://acestech-jam.vercel.app/"
    },
    {
      title: "TechAcademy",
      desc: "A fully responsive teaching platform with nice designs and nice learning processes",
      tags: ["Next.js", "Node.js", "MongoDB", "CSS"],
      img: "/techa.PNG",
      link: "https://tech-academy-nine.vercel.app/"
    }
  ],
  apps: [
    // { 
    //   title: 'FitPulse', 
    //   desc: 'Cross-platform fitness tracker with social features, AI workout plans, and real-time progress sync.', 
    //   tags: ['React Native', 'Expo', 'Node.js', 'Firebase'], 
    //   img: 'https://picsum.photos/seed/fit-pulse-ob/800/600.jpg',
    //   link: '#'
    // }
  ],
  uiux: [
    { 
      title: 'Averly Haven', 
      desc: 'Mobile app design for Averly Haven, a seamless wedding and event planning platform connecting users with vendors, venues, and stress-free deposit workflows.', 
      tags: ['Figma', 'Mobile App', 'User Flow', 'Prototyping'], 
      img: '/haven.png',
      link: 'https://www.figma.com/proto/ppuHpXjVRwTffjSf5qeVfd/WEDDING-CREATIVES?node-id=445-1733&p=f&t=tDMO9aeHLgDQcX3z-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=445%3A1713&show-proto-sidebar=1'
    }
  ]
};

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('websites');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentProjects = projects[activeTab] || [];

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
            <button className={`tab-btn ${activeTab === 'websites' ? 'active' : ''}`} onClick={() => setActiveTab('websites')}>Websites</button>
            <button className={`tab-btn ${activeTab === 'apps' ? 'active' : ''}`} onClick={() => setActiveTab('apps')}>Apps</button>
            <button className={`tab-btn ${activeTab === 'uiux' ? 'active' : ''}`} onClick={() => setActiveTab('uiux')}>UI/UX Design</button>
          </div>
        </div>
        <div className="project-grids">
          {Object.keys(projects).map(category => (
            <div key={category} className={`project-grid ${activeTab === category ? 'active' : ''}`} data-category={category}>
              {currentProjects.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📁</div>
                  <h3 className="empty-state-title">No projects yet</h3>
                  <p className="empty-state-desc">
                    This category is currently empty. Check back soon for new work!
                  </p>
                </div>
              ) : (
                currentProjects.map((project, idx) => (
                  <div key={project.title} className={`project-card ${category === 'websites' && idx === 0 ? 'col-span-2' : ''}`}>
                    <div className={`project-image ${category === 'websites' && idx === 0 ? 'image-large' : ''}`}>
                      <img src={project.img} alt={project.title} className="project-img" />
                    </div>
                    <div className="project-info">
                      <div className="project-header">
                        <div>
                          <h4 className="project-title">{project.title}</h4>
                          <p className="project-desc">{project.desc}</p>
                        </div>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-arrow"
                            aria-label={`Visit ${project.title} website`}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="7" y1="17" x2="17" y2="7"/>
                              <polyline points="7 7 17 7 17 17"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <div className="project-tags">
                        {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;