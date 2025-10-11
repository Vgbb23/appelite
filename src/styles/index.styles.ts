import { styled } from './stitches.config'

import { keyframes } from '@stitches/react'

export const MainContainer = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
    pointerEvents: 'none',
    zIndex: 1,
  },

  '@media (max-width: 768px)': {
    height: 'auto',
  },
})

export const MainContent = styled('div', {
  maxWidth: 950,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
  position: 'relative',
  zIndex: 2,
  animation: 'fadeInUp 0.8s ease-out',

  '@media (max-width: 768px)': {
    padding: '0 1rem',
    maxWidth: '100%',
    gap: '2rem',
  },
})

export const BoxContainer = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '3rem',
  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
  color: '#FFFFFF',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  border: '2px solid #D4AF37',
  boxShadow:
    '0 10px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
    borderRadius: 20,
    opacity: 0.3,
    filter: 'blur(10px)',
    zIndex: -1,
  },

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
    padding: '2rem 1.5rem',
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '700',
    padding: '1.2rem 2.8rem',
    color: '#0A0A0A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',
    border: '2px solid #F4E4B8',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow:
      '0 4px 25px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontFamily: "'Playfair Display', serif",
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      transition: 'left 0.5s',
    },

    '&:hover:not(:disabled)': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow:
        '0 8px 35px rgba(212, 175, 55, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5)',

      '&::before': {
        left: '100%',
      },
    },

    '&:active:not(:disabled)': {
      transform: 'translateY(-1px) scale(1.01)',
    },

    '&:disabled': {
      background: 'linear-gradient(135deg, #3A3A3A 0%, #2A2A2A 100%)',
      color: '#666',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
      border: '2px solid #3A3A3A',
    },
  },

  h1: {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: '1.4',
    marginBottom: '0.5rem',
    color: '#FFFFFF',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '0.5px',
    textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
  },

  img: {
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },

  input: {
    border: '2px solid #D4AF37',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: '#1A1A1A',
    color: '#FFFFFF',

    '&::placeholder': {
      color: '#666',
    },

    '&:focus': {
      borderColor: '#F4E4B8',
      boxShadow: '0 0 0 4px rgba(212, 175, 55, 0.2)',
      background: '#2A2A2A',
    },
  },
})

export const BoxContainer3 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '2.5rem',
  color: '#FFFFFF',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow:
    '0 10px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
  border: '2px solid #D4AF37',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
    borderRadius: 20,
    opacity: 0.2,
    filter: 'blur(10px)',
    zIndex: -1,
  },

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1.5rem',
    padding: '2rem 1.5rem',
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '1.2rem 2rem',
    color: '#0A0A0A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',
    border: '2px solid #F4E4B8',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow:
      '0 4px 25px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',

    '&:hover:not(:disabled)': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 35px rgba(212, 175, 55, 0.6)',
    },

    '&:disabled': {
      background: 'linear-gradient(135deg, #3A3A3A 0%, #2A2A2A 100%)',
      color: '#666',
      cursor: 'not-allowed',
      border: '2px solid #3A3A3A',
    },
  },

  h1: {
    fontSize: '2.2rem',
    color: '#FFFFFF',
    fontFamily: "'Playfair Display', serif",
    textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
  },

  img: {
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  },
})

export const BoxContainer4 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '2.5rem',
  color: '#FFFFFF',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow:
    '0 10px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
  border: '2px solid #D4AF37',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
    borderRadius: 20,
    opacity: 0.2,
    filter: 'blur(10px)',
    zIndex: -1,
  },

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1.5rem',
    padding: '2rem 1.5rem',
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '1.2rem 2rem',
    color: '#0A0A0A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',
    border: '2px solid #F4E4B8',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow:
      '0 4px 25px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',

    '&:hover:not(:disabled)': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 35px rgba(212, 175, 55, 0.6)',
    },

    '&:disabled': {
      background: 'linear-gradient(135deg, #3A3A3A 0%, #2A2A2A 100%)',
      color: '#666',
      cursor: 'not-allowed',
      border: '2px solid #3A3A3A',
    },
  },

  h1: {
    fontSize: '2.2rem',
    color: '#FFFFFF',
    fontFamily: "'Playfair Display', serif",
    textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
  },

  img: {
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  },
})

export const BoxContainer5 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '2.5rem',
  color: '#FFFFFF',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow:
    '0 10px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
  border: '2px solid #D4AF37',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
    borderRadius: 20,
    opacity: 0.2,
    filter: 'blur(10px)',
    zIndex: -1,
  },

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1.5rem',
    padding: '2rem 1.5rem',
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '1.2rem 2rem',
    color: '#0A0A0A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',
    border: '2px solid #F4E4B8',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow:
      '0 4px 25px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',

    '&:hover:not(:disabled)': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 35px rgba(212, 175, 55, 0.6)',
    },

    '&:disabled': {
      background: 'linear-gradient(135deg, #3A3A3A 0%, #2A2A2A 100%)',
      color: '#666',
      cursor: 'not-allowed',
      border: '2px solid #3A3A3A',
    },
  },

  h1: {
    fontSize: '2.2rem',
    color: '#FFFFFF',
    fontFamily: "'Playfair Display', serif",
    textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
  },

  img: {
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  },
})

export const BoxContainer6 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '2.5rem',
  color: '#FFFFFF',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow:
    '0 10px 50px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
  border: '2px solid #D4AF37',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
    borderRadius: 20,
    opacity: 0.2,
    filter: 'blur(10px)',
    zIndex: -1,
  },

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1.5rem',
    padding: '2rem 1.5rem',
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '1.2rem 2rem',
    color: '#0A0A0A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',
    border: '2px solid #F4E4B8',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow:
      '0 4px 25px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',

    '&:hover:not(:disabled)': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 35px rgba(212, 175, 55, 0.6)',
    },

    '&:disabled': {
      background: 'linear-gradient(135deg, #3A3A3A 0%, #2A2A2A 100%)',
      color: '#666',
      cursor: 'not-allowed',
      border: '2px solid #3A3A3A',
    },
  },

  h1: {
    fontSize: '2.2rem',
    color: '#FFFFFF',
    fontFamily: "'Playfair Display', serif",
    textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
  },

  img: {
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  },
})

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',

  p: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#F4E4B8',
    marginBottom: '0.5rem',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '0.5px',
  },

  input: {
    width: 350,
    borderRadius: 15,
    padding: '1rem 1.5rem',
    fontSize: '1.1rem',
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    border: '2px solid #D4AF37',
    transition: 'all 0.3s ease',
    fontFamily: "'Playfair Display', serif",

    '&:focus': {
      borderColor: '#F4E4B8',
      boxShadow:
        '0 0 0 4px rgba(212, 175, 55, 0.2), 0 0 20px rgba(212, 175, 55, 0.3)',
      outline: 'none',
      background: '#2A2A2A',
    },

    '&::placeholder': {
      color: '#666',
      fontSize: '1rem',
    },

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const SeguroContainer = styled('div', {
  width: '45rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
  boxShadow:
    '0 10px 30px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  gap: '.5rem',
  borderRadius: 50,
  fontWeight: '700',
  padding: '1.2rem 2rem',
  color: '#0A0A0A',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontSize: '1rem',
  fontFamily: "'Playfair Display', serif",
  border: '2px solid #F4E4B8',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    animation: 'shimmer 3s infinite linear',
  },

  '@media (max-width: 768px)': {
    width: '100%',
    padding: '1rem 1.5rem',
    fontSize: '0.9rem',
  },

  svg: {
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
  },
})

export const QuestionContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',
  gap: '.3rem',
  fontSize: '.8rem',
  color: '#475569',
})

export const SelectContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  P: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#475569',
  },
})

export const SelectConent = styled('div', {
  display: 'flex',
  gap: '.8rem',

  button: {
    transition: '100ms ease',
    padding: '10px',
  },
})

export const SelectConent2 = styled('div', {
  display: 'flex',
  gap: '.8rem',

  button: {
    transition: '100ms ease',
    padding: '.8rem 0',
    color: '#000',
    fontSize: '1rem',
  },
})

export const ModalOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const ModalContent = styled('div', {
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  padding: '3rem 2.5rem',
  borderRadius: '25px',
  textAlign: 'center',
  animation: `${FadeIn} 0.3s ease`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem',
  border: '2px solid #D4AF37',
  boxShadow:
    '0 20px 60px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #D4AF37, #F4E4B8, #D4AF37)',
    borderRadius: 25,
    opacity: 0.3,
    filter: 'blur(15px)',
    zIndex: -1,
  },

  h2: {
    color: '#F4E4B8',
    fontFamily: "'Playfair Display', serif",
    textShadow: '0 2px 15px rgba(212, 175, 55, 0.4)',
    letterSpacing: '1px',
  },

  p: {
    color: '#E0E0E0',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.6',
    fontFamily: "'Playfair Display', serif",
  },
})

export const ModalButton = styled('a', {
  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B8 50%, #D4AF37 100%)',
  color: '#0A0A0A',
  padding: '1.2rem 3rem',
  border: '2px solid #F4E4B8',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.8rem',
  fontSize: '1.4rem',
  fontWeight: '700',
  textDecoration: 'none',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontFamily: "'Playfair Display', serif",
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow:
    '0 6px 30px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transition: 'left 0.5s',
  },

  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 10px 40px rgba(212, 175, 55, 0.7)',

    '&::before': {
      left: '100%',
    },
  },

  '&:active': {
    transform: 'translateY(-1px) scale(1.02)',
  },
})
