import { styled } from '../../styles/stitches.config'

export const QuestionContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',
  gap: '.5rem',
  fontSize: '0.9rem',
  color: '#F4E4B8',
  fontWeight: '600',
  padding: '0.5rem 0',
})

export const RespondaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  background: 'rgba(212, 175, 55, 0.1)',
  padding: '1.5rem',
  borderRadius: '15px',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
  width: '100%',

  h3: {
    fontSize: '2rem',
    color: '#D4AF37',
    fontWeight: '700',
    textShadow: '0 2px 10px rgba(212, 175, 55, 0.4)',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '1px',

    'span[data-premium-number="true"]': {
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      fontWeight: '700',
      letterSpacing: '1.5px',
      fontVariantNumeric: 'tabular-nums',
    },
  },

  p: {
    color: '#C0C0C0',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
})

export const SelectContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  P: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#F4E4B8',
    fontFamily: "'Playfair Display', serif",
  },
})

export const SelectConent = styled('div', {
  display: 'flex',
  gap: '.8rem',
  justifyContent: 'center',

  button: {
    transition: 'all 0.3s ease',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid rgba(212, 175, 55, 0.3)',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
      border: '2px solid #D4AF37',
    },
  },
})

export const SelectConent2 = styled('div', {
  display: 'flex',
  gap: '1rem',
  width: '100%',
  justifyContent: 'center',

  button: {
    transition: 'all 0.3s ease',
    padding: '1rem 2rem',
    fontSize: '1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    flex: 1,
    maxWidth: '200px',
    fontWeight: '600',
    letterSpacing: '0.5px',

    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
    },
  },
})
