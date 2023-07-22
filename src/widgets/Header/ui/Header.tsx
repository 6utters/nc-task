import { FC } from 'react'
import { Box, Toolbar, Typography } from '@mui/material'
// @ts-ignore
import { ReactComponent as NotesAppLogo } from '@/shared/assets/icons/app_logo.svg'
// @ts-ignore
import { ReactComponent as AddIcon } from '@/shared/assets/icons/add-icon.svg'
import { useNavigate } from 'react-router-dom'

export const Header: FC = () => {
  const navigate = useNavigate()

  const onAddNoteClick = () => {
    navigate(`notes/${Date.now().toString()}`)
  }

  return (
    <Toolbar
      component={'header'}
      sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <NotesAppLogo width={50} height={50} />
        <Typography
          component='h2'
          variant='h6'
          color='inherit'
          sx={{ flex: 1 }}
        >
          Notes App
        </Typography>
      </Box>
      <button onClick={onAddNoteClick}>
        <AddIcon width={30} height={30} />
      </button>
    </Toolbar>
  )
}
