import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Keeps scroll position sensible across route changes.
 *
 * - Navigating to a new page starts at the top.
 * - Navigating to /#projects (e.g. from a case study) scrolls to that section
 *   once the home page has mounted.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a frame so the target section exists before scrolling to it.
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0 });
      }, 120);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
