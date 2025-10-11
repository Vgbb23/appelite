import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    color: '#0A0A0A',
    background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
    overflowX: 'hidden',
    textAlign: 'center',
    fontFamily: "'Playfair Display', Georgia, serif",

    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#1A1A1A',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(180deg, #D4AF37 0%, #B8941F 100%)',
      borderRadius: 10,
      border: '2px solid #1A1A1A',
    },
  },

  button: {
    cursor: 'pointer',
    border: '0',
    background: 'transparent',
  },

  'body, input, textarea, button': {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: '400',
  },

  // Estilos específicos para números e valores monetários
  '.premium-number, [data-premium-number="true"]': {
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    fontWeight: '600',
    letterSpacing: '0.5px',
    fontVariantNumeric: 'tabular-nums',
  },

  '@keyframes shimmer': {
    '0%': {
      backgroundPosition: '-1000px 0',
    },
    '100%': {
      backgroundPosition: '1000px 0',
    },
  },

  '@keyframes goldPulse': {
    '0%': {
      boxShadow:
        '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
    },
    '50%': {
      boxShadow:
        '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.2)',
    },
    '100%': {
      boxShadow:
        '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
    },
  },

  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
})
