import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'accent' | 'deco';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: 'color-mix(in srgb, var(--tema-color-accent) 12%, transparent)',
          borderColor: 'var(--tema-color-accent)',
          color: 'var(--tema-color-accent-ink)',
        };
      case 'deco':
        return {
          backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-1) 12%, transparent)',
          borderColor: 'var(--tema-color-deco-1)',
          color: 'var(--tema-color-text)',
        };
      default:
        return {
          backgroundColor: 'var(--tema-color-surface)',
          borderColor: 'var(--tema-color-border)',
          color: 'var(--tema-color-text-muted)',
        };
    }
  };

  const currentStyle = getStyles();

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-medium ${className}`}
      style={{
        borderRadius: 'var(--tema-radius)',
        borderWidth: 'var(--tema-border-width)',
        borderStyle: 'solid',
        borderColor: currentStyle.borderColor,
        backgroundColor: currentStyle.backgroundColor,
        color: currentStyle.color,
        fontFamily: 'var(--tema-font-label)',
        textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
        letterSpacing: 'var(--tema-label-tracking)',
        lineHeight: 1.4,
      }}
    >
      {children}
    </span>
  );
};
