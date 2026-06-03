
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div id="preloader" className="preloader">
      <div className="text-center">
        <p className="preloader-logo">OBETA<span className="accent-dot">.</span></p>
        <div className="preloader-bar-container">
          <div className="preloader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;