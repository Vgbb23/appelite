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

  '@media (max-width: 768px)': {
    padding: '0 1rem',
    maxWidth: '100%',
    gap: '2rem',
  },
})

export const BoxContainer = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  background: '#ffd7c9',
  color: '#000',
  borderRadius: 25,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  border: '2px solid #ff580c',
  boxShadow: '0 0px 20px 1px #f46b45',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '1rem 2.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(244, 107, 69, 0.3)',

    '&:hover:not(:disabled)': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(244, 107, 69, 0.4)',
    },

    '&:active:not(:disabled)': {
      transform: 'translateY(0px)',
    },

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },

  h1: {
    fontSize: '1.6rem',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: '1.3',
    marginBottom: '0.5rem',
  },

  img: {
    borderRadius: 15,
  },

  input: {
    border: '2px solid #ff580c',
    outline: 'none',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#f46b45',
      boxShadow: '0 0 0 3px rgba(244, 107, 69, 0.1)',
    },
  },
})

export const BoxContainer3 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const BoxContainer4 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const BoxContainer5 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const BoxContainer6 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
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
    fontSize: '1rem',
    fontWeight: '500',
    color: '#333',
    marginBottom: '0.5rem',
  },

  input: {
    width: 350,
    borderRadius: 15,
    padding: '.8rem 1rem',
    fontSize: '1.1rem',
    backgroundColor: '#fff',
    border: '2px solid #ff580c',
    transition: 'all 0.3s ease',

    '&:focus': {
      borderColor: '#f46b45',
      boxShadow: '0 0 0 3px rgba(244, 107, 69, 0.1)',
      outline: 'none',
    },

    '&::placeholder': {
      color: '#999',
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
  background: 'linear-gradient(09deg, #eea849, #f46b45)',
  boxShadow: '0 10px 15px -6px #f46b45',
  gap: '.3rem',
  borderRadius: 10,
  fontWeight: 'bold',
  padding: '1rem 0',

  '@media (max-width: 768px)': {
    width: '100%',
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
  backgroundColor: '#fff',
  color: '#000',
  padding: '20px',
  borderRadius: '25px',
  textAlign: 'center',
  animation: `${FadeIn} 0.3s ease`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  h2: {
    color: '#334155',
  },

  p: {
    color: '#334155',
    fontSize: '.9rem',
    fontWeight: '300',
  },
})

export const ModalButton = styled('a', {
  background: 'linear-gradient(09deg, #f46b45, #eea849)',
  color: '#fff',
  padding: '0.6rem 1rem',
  border: 'none',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.4rem',
  fontSize: '1.4rem',
  fontWeight: '700',
  textDecoration: 'none',
})
