import React, { createContext, useContext, useEffect, useState } from 'react';

interface MotionContextType {
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
  systemPrefersReduced: boolean;
}

const MotionContext = createContext<MotionContextType>({
  isReducedMotion: false,
  toggleReducedMotion: () => {},
  systemPrefersReduced: false,
});

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [systemPrefersReduced, setSystemPrefersReduced] = useState(false);
  const [userOverrideReduced, setUserOverrideReduced] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemPrefersReduced(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPrefersReduced(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isReducedMotion = userOverrideReduced !== null ? userOverrideReduced : systemPrefersReduced;

  const toggleReducedMotion = () => {
    setUserOverrideReduced((prev) => (prev === null ? !systemPrefersReduced : !prev));
  };

  return (
    <MotionContext.Provider
      value={{
        isReducedMotion,
        toggleReducedMotion,
        systemPrefersReduced,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
