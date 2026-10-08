import React, { useState } from 'react';
import { SiteContent } from '../content.ts';
import { Button } from '../components/ui/Button.tsx';
import { Menu, X } from 'lucide-react';

export interface HeaderProps {
  content: SiteContent['header'];
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!content.enabled) return null;

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md transition-colors"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--tema-color-bg) 92%, transparent)',
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Marca */}
        <a
          href="#"
          className="group flex flex-col justify-center focus-visible:outline-none"
          aria-label={`${content.marca} - Início`}
        >
          <span
            className="text-2xl sm:text-3xl font-normal tracking-tight text-tema-text"
            style={{
              fontFamily: 'var(--tema-font-display)',
              color: 'var(--tema-color-text)',
            }}
          >
            {content.marca}
          </span>
          <span
            className="text-[0.625rem] font-medium tracking-widest text-tema-muted uppercase -mt-1"
            style={{
              fontFamily: 'var(--tema-font-label)',
              letterSpacing: 'var(--tema-label-tracking)',
              color: 'var(--tema-color-text-muted)',
            }}
          >
            {content.subtituloMarca}
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Navegação principal"
        >
          {content.nav.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-tema-accent-ink py-2"
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text)',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ação Primária & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href={content.primaryAction.href}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            {content.primaryAction.label}
          </Button>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 border-tema rounded-tema cursor-pointer"
            style={{
              borderColor: 'var(--tema-color-border)',
              backgroundColor: 'var(--tema-color-surface)',
              color: 'var(--tema-color-text)',
            }}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t-tema bg-tema-surface px-4 py-6 shadow-sm"
          style={{
            borderTopWidth: 'var(--tema-border-width)',
            borderTopStyle: 'solid',
            borderTopColor: 'var(--tema-color-border)',
            backgroundColor: 'var(--tema-color-surface)',
          }}
        >
          <nav className="flex flex-col gap-2" aria-label="Menu móvel">
            {content.nav.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3 text-base font-medium rounded-tema"
                style={{
                  color: 'var(--tema-color-text)',
                  fontFamily: 'var(--tema-font-body)',
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-tema">
              <Button
                href={content.primaryAction.href}
                variant="primary"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.primaryAction.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
