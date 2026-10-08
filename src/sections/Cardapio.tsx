import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SiteContent } from '../content.ts';
import { Tabs } from '../components/ui/Tabs.tsx';
import { ItemCardapio } from '../components/ui/ItemCardapio.tsx';
import { useMotion } from '../components/ui/MotionContext.tsx';
import { Info } from 'lucide-react';

export interface CardapioProps {
  content: SiteContent['cardapio'];
}

export const Cardapio: React.FC<CardapioProps> = ({ content }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    content.categorias[0]?.id || 'entradas'
  );
  const { isReducedMotion } = useMotion();

  if (!content.enabled) return null;

  const activeCategory =
    content.categorias.find((c) => c.id === activeCategoryId) || content.categorias[0];

  const tabItems = content.categorias.map((c) => ({
    id: c.id,
    nome: c.nome,
  }));

  return (
    <section
      id={content.id}
      aria-labelledby="cardapio-heading"
      className="py-16 sm:py-24 border-b border-tema"
      style={{
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
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
            id="cardapio-heading"
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

          {/* Aviso fixo de alergênicos */}
          <div
            className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-tema border-tema text-xs font-medium"
            style={{
              borderColor: 'var(--tema-color-border)',
              backgroundColor: 'var(--tema-color-surface)',
              color: 'var(--tema-color-text-muted)',
              fontFamily: 'var(--tema-font-label)',
              letterSpacing: '0.04em',
            }}
          >
            <Info className="w-3.5 h-3.5 text-tema-accent-ink" aria-hidden="true" />
            <span>{content.avisoAlergenicos}</span>
          </div>
        </motion.div>

        {/* Abas das Categorias */}
        <div className="flex justify-center mb-8">
          <Tabs
            items={tabItems}
            activeId={activeCategoryId}
            onChange={setActiveCategoryId}
            aria-label="Categorias do cardápio"
          />
        </div>

        {/* Descrição e Lista de Itens com Troca de Layout */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className="p-6 sm:p-8 rounded-tema border-tema bg-tema-surface shadow-sm"
          style={{
            borderColor: 'var(--tema-color-border)',
            borderWidth: 'var(--tema-border-width)',
            borderStyle: 'solid',
            borderRadius: 'var(--tema-radius)',
            backgroundColor: 'var(--tema-color-surface)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{
                duration: isReducedMotion ? 0 : 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="border-b border-tema pb-4 mb-2">
                <h3
                  className="text-xl sm:text-2xl font-normal text-tema-text"
                  style={{
                    fontFamily: 'var(--tema-font-display)',
                    color: 'var(--tema-color-text)',
                  }}
                >
                  {activeCategory.nome}
                </h3>
                <p
                  className="text-xs sm:text-sm text-tema-muted mt-1 italic"
                  style={{
                    fontFamily: 'var(--tema-font-body)',
                    color: 'var(--tema-color-text-muted)',
                  }}
                >
                  {activeCategory.descricao}
                </p>
              </div>

              {/* Lista dos 4 itens com pontilhado */}
              <div className="divide-y-0">
                {activeCategory.itens.map((item, idx) => (
                  <ItemCardapio key={item.id} item={item} index={idx} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
