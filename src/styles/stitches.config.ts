import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Premium Color Palette
      gold: '#D4AF37',
      darkGold: '#B8941F',
      lightGold: '#F4E4B8',
      paleGold: '#FAF6E8',
      
      black: '#0A0A0A',
      darkGray: '#1A1A1A',
      mediumGray: '#2A2A2A',
      lightGray: '#3A3A3A',
      
      white: '#FFFFFF',
      offWhite: '#F8F8F8',
      cream: '#FFF9F0',
      
      accent: '#8B7355',
      accentLight: '#A68968',
    },
  },
})
