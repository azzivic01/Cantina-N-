import React from 'react';
import { motion } from 'motion/react';
import { SiteContent } from '../content.ts';
import { ImageReveal } from '../components/ui/ImageReveal.tsx';
import { useMotion } from '../components/ui/MotionContext.tsx';
import { Sparkles } from 'lucide-react';

export interface AmbienteProps {
  content: SiteContent['ambiente'];
}

export const Ambiente: React.FC<AmbienteProps> = ({ content }) => {
  const { isReducedMotion } = useMotion();

  if (!content.enabled) return null;

  const [img1, img2, img3] = content.galeria;

  return (
    <section
      id={content.id}
      aria-labelledby="ambiente-heading"
      className="py-16 sm:py-24 border-b border-tema"
      style={{
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isReducedMotion ? 0.15 : 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
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
              id="ambiente-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-tema-text"
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
            >
              {content.titulo}
            </h2>
          </motion.div>

          <motion.div
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isReducedMotion ? 0.15 : 0.45,
              delay: isReducedMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5"
          >
            <p
              className="text-base leading-relaxed text-tema-muted"
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text-muted)',
              }}
            >
              {content.texto}
            </p>
          </motion.div>
        </div>

        {/* Grade Assimétrica de 3 Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Imagem Principal (4/3) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            {img1 && (
              <ImageReveal
                src={img1.src}
                alt={img1.alt}
                aspectRatio={img1.aspectRatio}
                className="w-full h-full shadow-sm"
              />
            )}
          </div>

          {/* Coluna com as outras 2 imagens em arranjo assimétrico */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
            {img2 && (
              <ImageReveal
                src={img2.src}
                alt={img2.alt}
                aspectRatio={img2.aspectRatio}
                className="w-full shadow-sm"
              />
            )}
            {img3 && (
              <ImageReveal
                src={img3.src}
                alt={img3.alt}
                aspectRatio={img3.aspectRatio}
                className="w-full shadow-sm"
              />
            )}
          </div>
        </div>

        {/* Destaques do Ambiente */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-tema">
          {content.destaques.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm font-medium"
              style={{
                color: 'var(--tema-color-text)',
                fontFamily: 'var(--tema-font-body)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: 'var(--tema-color-deco-1)' }}
                aria-hidden="true"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
