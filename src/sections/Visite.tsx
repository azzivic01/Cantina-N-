import React from 'react';
import { motion } from 'motion/react';
import { SiteContent } from '../content.ts';
import { useMotion } from '../components/ui/MotionContext.tsx';
import { MapPin, Clock, Compass } from 'lucide-react';

export interface VisiteProps {
  content: SiteContent['visite'];
}

export const Visite: React.FC<VisiteProps> = ({ content }) => {
  const { isReducedMotion } = useMotion();

  if (!content.enabled) return null;

  return (
    <section
      id={content.id}
      aria-labelledby="visite-heading"
      className="py-16 sm:py-24 border-b border-tema"
      style={{
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Informações: Endereço, Horários, Observações */}
          <motion.div
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isReducedMotion ? 0.15 : 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6 flex flex-col"
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
              id="visite-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-tema-text mb-6"
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
            >
              {content.titulo}
            </h2>

            {/* Endereço */}
            <div className="mb-6 p-4 rounded-tema border-tema bg-tema-surface">
              <div className="flex items-center gap-2 mb-1 text-xs font-semibold uppercase tracking-wider text-tema-accent-ink">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Endereço</span>
              </div>
              <p
                className="text-base font-medium text-tema-text"
                style={{ fontFamily: 'var(--tema-font-body)' }}
              >
                {content.endereco}
              </p>
            </div>

            {/* Horários em lista (4 linhas de marcador) */}
            <div className="mb-6 p-4 rounded-tema border-tema bg-tema-surface">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-tema-accent-ink">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Horários de Funcionamento</span>
              </div>
              <ul className="divide-y divide-tema" style={{ borderColor: 'var(--tema-color-border)' }}>
                {content.horarios.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-2.5 flex items-center justify-between gap-4 text-sm"
                  >
                    <span
                      className="font-medium text-tema-text"
                      style={{ fontFamily: 'var(--tema-font-body)' }}
                    >
                      {item.dia}
                    </span>
                    <span
                      className="font-mono text-xs font-medium text-tema-muted"
                      style={{ fontFamily: 'var(--tema-font-mono)' }}
                    >
                      {item.horario}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Observação */}
            <div className="p-4 rounded-tema border border-dashed border-tema text-xs sm:text-sm text-tema-muted">
              <span className="font-semibold text-tema-text mr-1">Observações:</span>
              <span>{content.observacao}</span>
            </div>
          </motion.div>

          {/* Bloco "mapa": apenas retângulo com borda e o texto "[mapa]", sem iframe */}
          <motion.div
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isReducedMotion ? 0.15 : 0.45,
              delay: isReducedMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6 w-full"
          >
            <div
              className="relative w-full aspect-[4/3] rounded-tema border-tema bg-tema-surface flex flex-col items-center justify-center p-8 text-center"
              style={{
                borderWidth: 'var(--tema-border-width)',
                borderStyle: 'solid',
                borderColor: 'var(--tema-color-border)',
                borderRadius: 'var(--tema-radius)',
                backgroundColor: 'var(--tema-color-surface)',
              }}
              role="region"
              aria-label="Localização esquemática da Cantina"
            >
              {/* Grade sutil desenhada com variáveis do tema */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tema-color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--tema-color-border) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative z-10 flex flex-col items-center max-w-xs">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--tema-color-accent) 15%, transparent)',
                    color: 'var(--tema-color-accent-ink)',
                  }}
                >
                  <Compass className="w-6 h-6" aria-hidden="true" />
                </div>

                <span
                  className="text-lg font-bold tracking-wide uppercase px-3 py-1 rounded-tema mb-2 border border-dashed"
                  style={{
                    fontFamily: 'var(--tema-font-mono)',
                    borderColor: 'var(--tema-color-accent-ink)',
                    color: 'var(--tema-color-accent-ink)',
                    backgroundColor: 'var(--tema-color-bg)',
                  }}
                >
                  {content.mapa.rotulo}
                </span>

                <p
                  className="text-xs text-tema-muted leading-relaxed"
                  style={{ fontFamily: 'var(--tema-font-body)' }}
                >
                  {content.mapa.instrucao}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
