import React from 'react';
import { SiteContent } from '../content.ts';
import { useMotion } from '../components/ui/MotionContext.tsx';
import { Sliders, Check } from 'lucide-react';

export interface RodapeProps {
  content: SiteContent['rodape'];
}

export const Rodape: React.FC<RodapeProps> = ({ content }) => {
  const { isReducedMotion, toggleReducedMotion } = useMotion();

  if (!content.enabled) return null;

  return (
    <footer
      aria-label="Rodapé institucional"
      className="bg-tema-surface border-t border-tema py-12 sm:py-16 transition-colors"
      style={{
        borderTopWidth: 'var(--tema-border-width)',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--tema-color-border)',
        backgroundColor: 'var(--tema-color-surface)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Marca e Descrição */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span
              className="text-2xl sm:text-3xl font-normal tracking-tight text-tema-text mb-2"
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
            >
              {content.marca}
            </span>
            <p
              className="text-sm text-tema-muted mb-4 max-w-sm leading-relaxed"
              style={{ fontFamily: 'var(--tema-font-body)' }}
            >
              {content.descricao}
            </p>
            <div className="text-xs text-tema-muted space-y-1">
              <p>
                <span className="font-semibold text-tema-text mr-1">Localização:</span>
                <span>{content.endereco}</span>
              </p>
              <p>
                <span className="font-semibold text-tema-text mr-1">CNPJ:</span>
                <span>{content.cnpj}</span>
              </p>
              <p>
                <span className="font-semibold text-tema-text mr-1">Redes:</span>
                <span>{content.redes}</span>
              </p>
            </div>
          </div>

          {/* Links do Site */}
          <div className="md:col-span-4 flex flex-col">
            <span
              className="text-xs font-semibold mb-3 tracking-widest text-tema-accent-ink"
              style={{
                fontFamily: 'var(--tema-font-label)',
                textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
                letterSpacing: 'var(--tema-label-tracking)',
              }}
            >
              Navegação
            </span>
            <ul className="space-y-1.5">
              {content.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-tema-text hover:text-tema-accent-ink py-1 inline-block transition-colors"
                    style={{ fontFamily: 'var(--tema-font-body)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Acessibilidade & Preferência de Movimento */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="w-full md:text-right">
              <span
                className="text-xs font-semibold mb-3 tracking-widest text-tema-accent-ink block"
                style={{
                  fontFamily: 'var(--tema-font-label)',
                  textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
                  letterSpacing: 'var(--tema-label-tracking)',
                }}
              >
                Acessibilidade
              </span>

              {/* Botão "Reduzir animações" */}
              <button
                type="button"
                onClick={toggleReducedMotion}
                className="inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 text-xs font-medium rounded-tema border-tema cursor-pointer transition-colors shadow-sm"
                style={{
                  borderColor: isReducedMotion ? 'var(--tema-color-accent)' : 'var(--tema-color-border)',
                  backgroundColor: isReducedMotion
                    ? 'color-mix(in srgb, var(--tema-color-accent) 15%, transparent)'
                    : 'var(--tema-color-bg)',
                  color: isReducedMotion ? 'var(--tema-color-accent-ink)' : 'var(--tema-color-text)',
                  fontFamily: 'var(--tema-font-label)',
                  letterSpacing: '0.04em',
                }}
                aria-pressed={isReducedMotion}
                aria-label="Alternar redução de animações"
              >
                {isReducedMotion ? (
                  <Check className="w-3.5 h-3.5 text-tema-accent-ink" aria-hidden="true" />
                ) : (
                  <Sliders className="w-3.5 h-3.5 text-tema-muted" aria-hidden="true" />
                )}
                <span>
                  {isReducedMotion
                    ? content.botaoReduzirAnimacoes.ativoText
                    : content.botaoReduzirAnimacoes.inativoText}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Direitos */}
        <div
          className="pt-6 border-t border-tema flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-tema-muted"
          style={{ borderColor: 'var(--tema-color-border)' }}
        >
          <p>{content.direitos}</p>
          <p className="font-mono text-[11px]">{content.cnpj}</p>
        </div>
      </div>
    </footer>
  );
};
