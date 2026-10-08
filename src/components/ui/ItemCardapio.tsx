import React from 'react';
import { motion } from 'motion/react';
import { MenuItem } from '../../content.ts';
import { Badge } from './Badge.tsx';
import { useMotion } from './MotionContext.tsx';

export interface ItemCardapioProps {
  item: MenuItem;
  index: number;
}

export const ItemCardapio: React.FC<ItemCardapioProps> = ({ item, index }) => {
  const { isReducedMotion } = useMotion();

  return (
    <motion.article
      initial={{ opacity: isReducedMotion ? 1 : 0, y: isReducedMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: isReducedMotion ? 0.15 : 0.4,
        delay: isReducedMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col py-3.5 border-b border-tema"
      style={{
        borderBottomColor: 'color-mix(in srgb, var(--tema-color-border) 60%, transparent)',
        borderBottomWidth: 'var(--tema-border-width)',
        borderBottomStyle: 'solid',
      }}
    >
      {/* Linha principal: Nome + Pontilhado (Assinatura) + Preço */}
      <div className="flex items-baseline justify-between gap-2 w-full">
        <h3
          className="text-base sm:text-lg font-medium tracking-tight text-tema-text shrink-0"
          style={{
            fontFamily: 'var(--tema-font-display)',
            color: 'var(--tema-color-text)',
          }}
        >
          {item.nome}
        </h3>

        {/* Linha de pontinhos que se estende da esquerda para a direita */}
        <div className="relative flex-1 min-w-[20px] self-baseline h-[1px] mx-1 sm:mx-2 overflow-hidden">
          <motion.div
            initial={{ scaleX: isReducedMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: isReducedMotion ? 0 : 0.7,
              delay: isReducedMotion ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: 'left',
              width: '100%',
              height: '1px',
              borderBottomWidth: '1.5px',
              borderBottomStyle: 'dotted',
              borderBottomColor: 'var(--tema-color-border)',
            }}
          />
        </div>

        {/* Preço em DM Mono */}
        <span
          className="text-sm sm:text-base font-semibold shrink-0 font-price tracking-normal"
          style={{
            fontFamily: 'var(--tema-font-mono)',
            color: 'var(--tema-color-accent-ink)',
          }}
        >
          {item.preco}
        </span>
      </div>

      {/* Descrição e tags */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mt-1.5">
        <p
          className="text-xs sm:text-sm leading-relaxed text-tema-muted max-w-xl"
          style={{
            color: 'var(--tema-color-text-muted)',
            fontFamily: 'var(--tema-font-body)',
          }}
        >
          {item.descricao}
        </p>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-1 sm:mt-0 shrink-0">
            {item.tags.map((tag, tIdx) => (
              <Badge
                key={tIdx}
                variant={tag.includes('[') ? 'deco' : tag === 'vegetariano' ? 'accent' : 'neutral'}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
