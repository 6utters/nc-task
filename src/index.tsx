import ReactDOM from 'react-dom/client'
import { StoreProvider } from '@/app/providers/store'
import { DBProvider } from '@/app/providers/db'
import { AppRouter } from '@/app/providers/router'
import { ThemeProvider } from '@/app/providers/theme'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <DBProvider>
      <ThemeProvider>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </DBProvider>
  </StoreProvider>
)
