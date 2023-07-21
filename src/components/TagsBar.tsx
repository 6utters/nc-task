import { FC } from 'react'
import {
  Box, Chip,
  Typography
} from '@mui/material'
import { Sidebar } from '@/ui/Sidebar'

interface TagsBarProps {
  width: number
}

export const TagsBar: FC<TagsBarProps> = (props) => {
  const { width } = props
  return (
    <Sidebar width={width}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
        Tags:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Chip variant='outlined' label='All Tags' sx={{ cursor: 'pointer' }} />
        <Chip variant='outlined' label='asdasdasd' />
        <Chip variant='outlined' label='sdfsdf' />
      </Box>
    </Sidebar>
  )
}
