import React from 'react';
import { motion } from 'motion/react';
import { useMotion } from './MotionContext.tsx';

export interface SeloProps {
  texto?: string;
  subtexto?: string;
  className?: string;
}

export const Selo: React.FC<SeloProps> = ({
  texto = 'Prato do dia',
  subtexto = 'Cozinha de panela',
  className = '',
}) => {
  const { isReducedMotion } = useMotion();

  // O texto circular "PRATO DO DIA • CANTINA NÔ • COZINHA DE PANELA •"
  const stampText = `${texto.toUpperCase()} • ${subtexto.toUpperCase()} • `;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      aria-label={`${texto} - ${subtexto}`}
    >
      <motion.div
        animate={
          isReducedMotion
            ? { rotate: 0 }
            : { rotate: 360 }
        }
        transition={{
          repeat: isReducedMotion ? 0 : Infinity,
          duration: 24,
          ease: 'linear',
        }}
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-tema flex items-center justify-center p-1.5 shadow-sm"
        style={{
          borderWidth: 'var(--tema-border-width)',
          borderStyle: 'dashed',
          borderColor: 'var(--tema-color-deco-1)',
          backgroundColor: 'var(--tema-color-surface)',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            id="stampCirclePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text
            className="text-[7.5px] font-semibold"
            style={{
              fontFamily: 'var(--tema-font-label)',
              fill: 'var(--tema-color-accent-ink)',
              letterSpacing: '0.12em',
            }}
          >
            <textPath
              href="#stampCirclePath"
              startOffset="0%"
            >
              {stampText}
            </textPath>
          </text>
        </svg>

        {/* Centro do carimbo */}
        <div
          className="absolute inset-0 m-auto w-12 h-12 rounded-full border border-dashed flex flex-col items-center justify-center"
          style={{
            borderColor: 'var(--tema-color-deco-1)',
            backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-1) 12%, transparent)',
          }}
        >
          <span
            className="text-[10px] font-bold tracking-widest text-center"
            style={{
              fontFamily: 'var(--tema-font-mono)',
              color: 'var(--tema-color-accent-ink)',
            }}
          >
            NÔ
          </span>
        </div>
      </motion.div>
    </div>
  );
};
