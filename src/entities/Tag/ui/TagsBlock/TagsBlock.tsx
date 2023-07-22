import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getNoteById } from '@/entities/Note'

interface TagsBlockProps {
  noteId: string
}

export const TagsBlock: FC<TagsBlockProps> = (props) => {
  const { noteId } = props
  const note = useSelector(getNoteById(noteId))

  return (
    <Box sx={{
      maxHeight: '250px',
      height: '100%',
      padding: '16px',
      borderTop: 1, borderColor: 'divider'
    }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>Current Tags:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {note?.tags.map((tag) =>
          <Typography key={tag} variant='h6'>{tag}</Typography>
        )}
      </Box>
    </Box>
  )
}
