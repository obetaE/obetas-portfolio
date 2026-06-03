
import React from 'react';

const row1 = ['Next.js','React','React Native','TypeScript','JavaScript','Node.js','MongoDB','Appwrite','Figma','Tailwind CSS','Git','PostgreSQL'];
const row2 = ['Firebase','Prisma','Expo','Redux','REST API','GraphQL','Docker','Vercel','Supabase','Stripe','AWS','Framer Motion'];

const TechStackSlider: React.FC = () => {
  const createItems = (arr: string[]) => {
    return arr.map(t => (
      <div key={t} className="stack-item">
        <div className="stack-dot"></div>
        <span className="stack-name">{t}</span>
      </div>
    ));
  };

  return (
    <section id="stack" className="tech-stack-section">
      <div className="tech-stack-header">
        <span className="tech-stack-label">Tech Stack</span>
        <div className="tech-stack-line"></div>
      </div>
      <div className="marquee-container">
        <div className="marquee-track marquee-left">
          <div className="marquee-content">{createItems(row1)}</div>
          <div className="marquee-content">{createItems(row1)}</div>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-track marquee-right">
          <div className="marquee-content">{createItems(row2)}</div>
          <div className="marquee-content">{createItems(row2)}</div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;