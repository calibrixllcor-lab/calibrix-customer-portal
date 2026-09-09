import { useState, useEffect } from 'react';

export const useHashRouter = () => {
  const [hash, setHash] = useState(window.location.hash.slice(1) || 'home');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.slice(1) || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return { hash, navigate };
};
