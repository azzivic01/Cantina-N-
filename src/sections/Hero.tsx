import React from 'react';
import { motion } from 'motion/react';
import { SiteContent } from '../content.ts';
import { Button } from '../components/ui/Button.tsx';
import { ImageReveal } from '../components/ui/ImageReveal.tsx';
import { Selo } from '../components/ui/Selo.tsx';
import { useMotion } from '../components/ui/MotionContext.tsx';

export interface HeroProps {
  content: SiteContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const { isReducedMotion } = useMotion();

  if (!content.enabled) return null;

  return (
    <section
      id="hero"
      aria-label="Apresentação da Cantina Nô"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden border-b border-tema"
      style={{
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna de Texto (O único <h1> da página) */}
          <motion.div
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isReducedMotion ? 0.15 : 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Kicker */}
            <span
              className="inline-block text-xs font-semibold mb-3 tracking-widest text-tema-accent-ink"
              style={{
                fontFamily: 'var(--tema-font-label)',
                textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
                letterSpacing: 'var(--tema-label-tracking)',
                color: 'var(--tema-color-accent-ink)',
              }}
            >
              {content.kicker}
            </span>

            {/* Único h1 */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.12] tracking-tight mb-5 text-tema-text"
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
            >
              {content.title}
            </h1>

            {/* Descrição */}
            <p
              className="text-base sm:text-lg leading-relaxed text-tema-muted mb-8 max-w-xl"
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text-muted)',
              }}
            >
              {content.description}
            </p>

            {/* Ações */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Button href={content.primaryAction.href} variant="primary">
                {content.primaryAction.label}
              </Button>
              <Button href={content.secondaryAction.href} variant="secondary">
                {content.secondaryAction.label}
              </Button>
            </div>
          </motion.div>

          {/* Coluna da Imagem e Selo */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <ImageReveal
                src={content.image.src}
                alt={content.image.alt}
                aspectRatio={content.image.aspectRatio}
                priority={true}
              />

              {/* Selo redondo posicionado sobrepondo a borda da imagem */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20">
                <Selo
                  texto={content.selo.texto}
                  subtexto={content.selo.subtexto}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
