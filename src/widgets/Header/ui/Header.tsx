import { FC } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { AppLogo } from '@/shared/ui/AppLogo'

export const Header: FC = () => {
  return (
    <AppBar position='static' color={'secondary'} sx={{ boxShadow: 0, borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar
        variant={'dense'}
        disableGutters
        sx={{ minHeight: '44px', height: '44px', display: 'flex', justifyContent: 'space-between', px: '10px' }}
      >
        <AppLogo />
      </Toolbar>
    </AppBar>
  )
}
