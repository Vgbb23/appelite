import { styled } from '../../styles/stitches.config'

export const HeaderContainer = styled('div', {
  width: '100vw',
  height: '9rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
  borderBottom: '2px solid #D4AF37',
  boxShadow: '0 4px 30px rgba(212, 175, 55, 0.2)',
  position: 'relative',
  zIndex: '1000',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
    animation: 'shimmer 3s infinite linear',
  },
})

export const HeaderContent = styled('div', {
  width: 1140,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: '1000',
  padding: '0 2rem',

  p: {
    color: '#0A0A0A',
    background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
    padding: '1rem 2.5rem',
    borderRadius: 50,
    fontWeight: '700',
    fontSize: '1.5rem',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    border: '1px solid #F4E4B8',
    textTransform: 'uppercase',
    fontFamily: "'Playfair Display', serif",
    animation: 'goldPulse 2s infinite ease-in-out',

    '@media (max-width: 768px)': {
      padding: '.8rem 1.5rem',
      fontSize: '1.2rem',
    },

    'span[data-premium-number="true"]': {
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      fontWeight: '700',
      letterSpacing: '1.5px',
      fontVariantNumeric: 'tabular-nums',
    },
  },

  '@media (max-width: 768px)': {
    position: 'fixed',
    top: '0rem',
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
  },
})

export const HeaderImg = styled('div', {
  filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))',
  },
  
  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const HeaderImg2 = styled('div', {
  display: 'none',
  filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))',
  
  '@media (max-width: 768px)': {
    display: 'block',
  },
})
