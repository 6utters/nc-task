import { FC } from 'react'
import { Toolbar, Typography } from '@mui/material'
import { ReactComponent as NotesAppLogo } from '../assets/icons/app_logo.svg'

export const Header: FC = () => {
  return (
    <Toolbar component={'header'} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <NotesAppLogo width={50} height={50} />
      <Typography
        component='h2'
        variant='h6'
        color='inherit'
        sx={{ flex: 1 }}
      >
        Notes App
      </Typography>
    </Toolbar>
  )
}
