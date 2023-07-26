import { FC, ReactNode } from 'react'
import { ThemeProvider as Provider } from '@mui/material'
import { theme } from '../config/theme'
import '../config/theme.css'

interface ThemeProviderProps {
  children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props
  return <Provider theme={theme}>{children}</Provider>
}
