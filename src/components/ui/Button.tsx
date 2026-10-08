import React from 'react';
import { useMotion } from './MotionContext.tsx';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const { isReducedMotion } = useMotion();

  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  const baseStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '44px',
    minWidth: '44px',
    padding: '0.625rem 1.25rem',
    borderRadius: 'var(--tema-radius)',
    borderWidth: 'var(--tema-border-width)',
    borderStyle: 'solid',
    fontFamily: 'var(--tema-font-label)',
    textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
    letterSpacing: 'var(--tema-label-tracking)',
    fontSize: '0.8125rem',
    fontWeight: 600,
    textDecoration: 'none',
    overflow: 'hidden',
    cursor: 'pointer',
    borderColor: isOutline
      ? 'var(--tema-color-border)'
      : 'var(--tema-color-accent)',
    backgroundColor: isPrimary
      ? 'var(--tema-color-accent)'
      : 'var(--tema-color-surface)',
    color: isPrimary
      ? 'var(--tema-color-on-accent)'
      : 'var(--tema-color-accent-ink)',
    boxShadow: 'var(--tema-shadow-hard)',
    transitionProperty: isReducedMotion ? 'opacity' : 'color, border-color, background-color',
    transitionDuration: 'var(--motion-duration-fast)',
    transitionTimingFunction: 'var(--motion-easing-base)',
  };

  const hoverFillStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundColor: isPrimary
      ? 'color-mix(in srgb, var(--tema-color-text) 20%, var(--tema-color-accent))'
      : 'var(--tema-color-accent)',
    transform: 'translateX(-100%)',
    transition: isReducedMotion
      ? 'none'
      : 'transform var(--motion-duration-base) var(--motion-easing-cinematic)',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: isReducedMotion ? 'none' : 'color var(--motion-duration-fast) var(--motion-easing-base)',
  };

  // Group class to drive hover slide
  const buttonClassName = `group ${className}`;

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        className={buttonClassName}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <span
          style={hoverFillStyle}
          className={
            isReducedMotion
              ? ''
              : isPrimary
                ? 'group-hover:translate-x-0'
                : 'group-hover:translate-x-0'
          }
        />
        <span
          style={contentStyle}
          className={
            !isPrimary && !isReducedMotion
              ? 'group-hover:text-[var(--tema-color-on-accent)]'
              : ''
          }
        >
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      className={buttonClassName}
      aria-label={ariaLabel}
    >
      <span
        style={hoverFillStyle}
        className={
          isReducedMotion
            ? ''
            : 'group-hover:translate-x-0'
        }
      />
      <span
        style={contentStyle}
        className={
          !isPrimary && !isReducedMotion
            ? 'group-hover:text-[var(--tema-color-on-accent)]'
            : ''
        }
      >
        {children}
      </span>
    </button>
  );
};
