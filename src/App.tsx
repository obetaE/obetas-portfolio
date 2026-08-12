import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import UIUXCaseStudyPage from './pages/UIUXCaseStudyPage';

const App: React.FC = () => {
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (preloaderVisible) return;
    // Trigger the hero reveals once the preloader clears. Scoped to #hero so
    // it is a no-op on pages that do not render the hero.
    const timer = setTimeout(() => {
      document.querySelectorAll('#hero .reveal').forEach((el) => el.classList.add('active'));
    }, 400);
    return () => clearTimeout(timer);
  }, [preloaderVisible]);

  return (
    <div className="app">
      {preloaderVisible && <Preloader />}

      <ScrollToTop />

      <Routes>
        {/* Home — the original single-page portfolio */}
        <Route path="/" element={<Home />} />

        {/* UI/UX case study — resolves the project from the URL slug */}
        <Route path="/uiux/:slug" element={<UIUXCaseStudyPage />} />

        {/* Anything else falls through to the case study page's 404 state */}
        <Route path="*" element={<UIUXCaseStudyPage />} />
      </Routes>

      <div className="grain"></div>
    </div>
  );
};

export default App;
