import React from 'react';
import { useMotion } from './MotionContext.tsx';

export interface LinkAnimadoProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export const LinkAnimado: React.FC<LinkAnimadoProps> = ({
  href,
  children,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const { isReducedMotion } = useMotion();

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`group relative inline-flex items-center min-h-[44px] py-2 text-sm font-medium ${className}`}
      style={{
        color: 'var(--tema-color-text)',
        fontFamily: 'var(--tema-font-body)',
        textDecoration: 'none',
        transition: isReducedMotion ? 'none' : 'color var(--motion-duration-fast) var(--motion-easing-base)',
      }}
    >
      <span className="relative">
        {children}
        <span
          className="absolute left-0 bottom-[-2px] h-[1.5px] w-full"
          style={{
            backgroundColor: 'var(--tema-color-accent)',
            transformOrigin: 'left',
            transform: 'scaleX(0)',
            transition: isReducedMotion
              ? 'none'
              : 'transform var(--motion-duration-base) var(--motion-easing-cinematic)',
          }}
        />
      </span>
    </a>
  );
};
