import React, { useState, useEffect, Suspense } from 'react';

const TechStack = React.lazy(() => import('./TechStack'));

const MyComponent: React.FC = () => {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => setIsDesktopView(window.innerWidth > 1024);
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  useEffect(() => {
    if (isDesktopView) {
      const delay = setTimeout(() => {
        setShouldRender(true); // Set to true after delay
      }, 10000); // Delay in milliseconds (e.g., 500ms delay)

      return () => clearTimeout(delay); // Cleanup on component unmount or dependency change
    } else {
      setShouldRender(false); // If it's not desktop, reset
    }
  }, [isDesktopView]);

  return (
    shouldRender && (
      <Suspense fallback={<div>Loading....</div>}>
        <TechStack />
      </Suspense>
    )
  );
};

export default MyComponent;
