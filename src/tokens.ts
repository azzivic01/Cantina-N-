/**
 * Tokens do tema para Cantina Nô
 * Espelha fielmente as variáveis CSS declaradas em src/index.css
 */
export const tokens = {
  colors: {
    bg: '#F4EEE1',
    surface: '#FFFBF2',
    border: '#D9CFB8',
    text: '#1F1B16',
    textMuted: '#5E564A',
    accent: '#3F5A2A',
    accentInk: '#3F5A2A',
    onAccent: '#FFFBF2',
    deco1: '#C9962B',
    deco2: '#B4552D',
    deco3: '#8FA37A',
  },
  fonts: {
    display: 'Young Serif',
    body: 'Instrument Sans',
    label: 'Instrument Sans',
    mono: 'DM Mono',
  },
  shape: {
    radius: '3px',
    radiusLg: '6px',
    borderWidth: '1.5px',
    shadowHard: 'none',
  },
  text: {
    labelTransform: 'uppercase',
    labelTracking: '0.14em',
    displayTransform: 'none',
  },
  motion: {
    durationFast: '150ms',
    durationBase: '300ms',
    durationSlow: '700ms',
    durationCinematic: '1000ms',
    easingBase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easingCinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    stagger: '80ms',
  },
} as const;

export type ThemeTokens = typeof tokens;
