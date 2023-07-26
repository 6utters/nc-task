import { createTheme } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent: Palette['primary']
    contrast1: Palette['primary']
    contrast2: Palette['primary']
    selected: Palette['primary']
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary']
    contrast1?: PaletteOptions['primary']
    contrast2?: PaletteOptions['primary']
    selected?: PaletteOptions['primary']
  }
}

export let theme = createTheme({
  typography: {
    fontFamily: 'SF UI Text Regular'
  },
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#f5f5f7'
    },
    accent: {
      main: '#fbb822'
    },
    contrast1: {
      main: '#6e6e73'
    },
    contrast2: {
      main: 'rgba(60,60,67,.6)'
    },
    selected: {
      main: 'rgba(120,120,128,0.25)'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        body: {
          backgroundColor: '#f5f5f7',
          fontFamily: 'SF UI Text Regular',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#ffffff',
            width: '8px'
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#9b9ba3',
            minHeight: 24
          }
        },
        a: {
          textDecoration: 'none'
        },
        'a:hover': {
          textDecoration: 'none'
        },
        textarea: {
          fontFamily: 'inherit',
          backgroundColor: 'transparent'
        }
      }
    }
  }
})
