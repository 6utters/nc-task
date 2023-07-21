import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import './NotePage.css'

export const NotePage: FC = () => {
  // const { id } = useParams<{ id: string }>()

  return (
    <Box className={'note-page'}>
      <textarea></textarea>
      <Box sx={{
        maxHeight: '250px',
        height: '100%',
        padding: '16px',
        borderTop: 1, borderColor: 'divider'
      }}>
        <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>Current Tags:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <Typography variant='h6'>#tag</Typography>
        </Box>
      </Box>
    </Box>
  )
}
