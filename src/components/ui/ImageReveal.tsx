import React from 'react';
import { motion } from 'motion/react';
import { useMotion } from './MotionContext.tsx';

export interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: '4/3' | '3/4' | '16/9';
  className?: string;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = '4/3',
  className = '',
  priority = false,
}) => {
  const { isReducedMotion } = useMotion();

  const aspectClass =
    aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : aspectRatio === '16/9'
        ? 'aspect-[16/9]'
        : 'aspect-[4/3]';

  return (
    <div
      className={`relative overflow-hidden border-tema rounded-tema bg-tema-surface ${aspectClass} ${className}`}
      style={{
        borderWidth: 'var(--tema-border-width)',
        borderStyle: 'solid',
        borderColor: 'var(--tema-color-border)',
        borderRadius: 'var(--tema-radius)',
        backgroundColor: 'var(--tema-color-surface)',
      }}
    >
      <motion.div
        initial={
          isReducedMotion
            ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
            : { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }
        }
        whileInView={{
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
        }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: isReducedMotion ? 0.15 : 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover select-none"
        />
      </motion.div>
    </div>
  );
};
