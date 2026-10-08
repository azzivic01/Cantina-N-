import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useMotion } from './MotionContext.tsx';

export interface TabItem {
  id: string;
  nome: string;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  'aria-label'?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onChange,
  className = '',
  'aria-label': ariaLabel = 'Categorias do cardápio',
}) => {
  const { isReducedMotion } = useMotion();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % items.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = items.length - 1;
    } else {
      return;
    }

    tabsRef.current[nextIndex]?.focus();
    onChange(items[nextIndex].id);
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`inline-flex flex-wrap items-center gap-1.5 p-1 border-tema rounded-tema bg-tema-surface ${className}`}
      style={{
        borderColor: 'var(--tema-color-border)',
        borderRadius: 'var(--tema-radius)',
        backgroundColor: 'var(--tema-color-surface)',
        borderWidth: 'var(--tema-border-width)',
        borderStyle: 'solid',
      }}
    >
      {items.map((tab, idx) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            ref={(el) => { tabsRef.current[idx] = el; }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="relative min-h-[44px] px-4 py-2 text-xs md:text-sm font-medium transition-colors cursor-pointer select-none"
            style={{
              fontFamily: 'var(--tema-font-label)',
              textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
              letterSpacing: 'var(--tema-label-tracking)',
              color: isActive ? 'var(--tema-color-on-accent)' : 'var(--tema-color-text)',
            }}
          >
            {isActive && (
              <motion.span
                layoutId={isReducedMotion ? undefined : 'active-tab-indicator'}
                className="absolute inset-0 z-0"
                style={{
                  backgroundColor: 'var(--tema-color-accent)',
                  borderRadius: 'var(--tema-radius)',
                }}
                transition={{
                  duration: isReducedMotion ? 0 : 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            )}
            <span className="relative z-10">{tab.nome}</span>
          </button>
        );
      })}
    </div>
  );
};
