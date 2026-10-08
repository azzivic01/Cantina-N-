import React from 'react';
import { motion } from 'motion/react';
import { SiteContent } from '../content.ts';
import { Button } from '../components/ui/Button.tsx';
import { useMotion } from '../components/ui/MotionContext.tsx';
import { MessageCircle, Phone, Clock } from 'lucide-react';

export interface ReservasProps {
  content: SiteContent['reservas'];
}

export const Reservas: React.FC<ReservasProps> = ({ content }) => {
  const { isReducedMotion } = useMotion();

  if (!content.enabled) return null;

  return (
    <section
      id={content.id}
      aria-labelledby="reservas-heading"
      className="py-16 sm:py-24 border-b border-tema"
      style={{
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isReducedMotion ? 0.15 : 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="p-8 sm:p-12 rounded-tema border-tema bg-tema-surface text-center shadow-sm relative overflow-hidden"
          style={{
            borderColor: 'var(--tema-color-border)',
            borderWidth: 'var(--tema-border-width)',
            borderStyle: 'solid',
            borderRadius: 'var(--tema-radius)',
            backgroundColor: 'var(--tema-color-surface)',
          }}
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

          {/* Título */}
          <h2
            id="reservas-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-tema-text mb-4"
            style={{
              fontFamily: 'var(--tema-font-display)',
              color: 'var(--tema-color-text)',
            }}
          >
            {content.titulo}
          </h2>

          {/* Texto */}
          <p
            className="text-base sm:text-lg leading-relaxed text-tema-muted max-w-xl mx-auto mb-8"
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
          >
            {content.texto}
          </p>

          {/* Dois botões de link (sem formulário) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button
              href={content.botoes.whatsapp.href}
              variant="primary"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 shrink-0 mr-1" aria-hidden="true" />
              <span>{content.botoes.whatsapp.label}</span>
            </Button>

            <Button
              href={content.botoes.telefone.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 shrink-0 mr-1" aria-hidden="true" />
              <span>{content.botoes.telefone.label} ({content.botoes.telefone.display})</span>
            </Button>
          </div>

          {/* Aviso sobre ausência de formulário */}
          <p
            className="text-xs text-tema-muted flex items-center justify-center gap-1.5"
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
          >
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{content.aviso}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
