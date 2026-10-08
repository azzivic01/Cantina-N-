import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useMotion } from './MotionContext.tsx';

export interface AccordionItemData {
  pergunta: string;
  resposta: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isReducedMotion } = useMotion();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      className={`divide-y divide-tema border-tema rounded-tema bg-tema-surface ${className}`}
      style={{
        borderWidth: 'var(--tema-border-width)',
        borderStyle: 'solid',
        borderColor: 'var(--tema-color-border)',
        borderRadius: 'var(--tema-radius)',
        backgroundColor: 'var(--tema-color-surface)',
      }}
    >
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const triggerId = `faq-trigger-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className="overflow-hidden"
            style={{
              borderColor: 'var(--tema-color-border)',
            }}
          >
            <button
              type="button"
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx)}
              className="flex w-full min-h-[48px] items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer transition-colors"
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
            >
              <span className="text-base sm:text-lg font-medium pr-2">
                {item.pergunta}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{
                  duration: isReducedMotion ? 0 : 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="shrink-0 text-tema-accent-ink"
                style={{
                  color: 'var(--tema-color-accent-ink)',
                }}
              >
                <ChevronDown className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={isReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={isReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={isReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    duration: isReducedMotion ? 0.15 : 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1">
                    <p
                      className="text-sm sm:text-base leading-relaxed text-tema-muted"
                      style={{
                        fontFamily: 'var(--tema-font-body)',
                        color: 'var(--tema-color-text-muted)',
                      }}
                    >
                      {item.resposta}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
