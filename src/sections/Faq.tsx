import React from 'react';
import { motion } from 'motion/react';
import { SiteContent } from '../content.ts';
import { Accordion } from '../components/ui/Accordion.tsx';
import { useMotion } from '../components/ui/MotionContext.tsx';

export interface FaqProps {
  content: SiteContent['faq'];
}

export const Faq: React.FC<FaqProps> = ({ content }) => {
  const { isReducedMotion } = useMotion();

  if (!content.enabled) return null;

  return (
    <section
      id={content.id}
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 border-b border-tema"
      style={{
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isReducedMotion ? 0.15 : 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs font-semibold mb-2 tracking-widest text-tema-accent-ink"
            style={{
              fontFamily: 'var(--tema-font-label)',
              textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
              letterSpacing: 'var(--tema-label-tracking)',
              color: 'var(--tema-color-accent-ink)',
            }}
          >
            {content.kicker}
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-tema-text mb-3"
            style={{
              fontFamily: 'var(--tema-font-display)',
              color: 'var(--tema-color-text)',
            }}
          >
            {content.titulo}
          </h2>
          <p
            className="text-base sm:text-lg text-tema-muted max-w-lg mx-auto"
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
          >
            {content.subtitulo}
          </p>
        </motion.div>

        <Accordion items={content.itens} />
      </div>
    </section>
  );
};
