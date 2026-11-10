import React from 'react';

/** Reusable laptop frame for website case-study screens. */
const LaptopFrame: React.FC<{ children: React.ReactNode; label: string }> = ({ children, label }) => (
  <div className="cs-laptop-frame" role="img" aria-label={label}>
    <div className="cs-laptop-lid">
      <div className="cs-laptop-camera" />
      <div className="cs-laptop-screen">{children}</div>
    </div>
    <div className="cs-laptop-hinge" />
    <div className="cs-laptop-base"><span /></div>
  </div>
);

export default LaptopFrame;
