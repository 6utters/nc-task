import { FC, ReactNode } from 'react'
import { Header } from '@/widgets/Header/ui/Header'
import { Box } from '@mui/material'
import { NotesBar } from '@/widgets/NotesBar/ui/NotesBar'
import { TagsBar } from '@/widgets/TagsBar/ui/TagsBar'

interface MainLayoutProps {
  children: ReactNode
}

const TAGS_BAR_WIDTH = 260
const NOTES_BAR_WIDTH = 320

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props
  return (
    <Box sx={{ maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden' }}>
      <Header />
      <Box component={'main'} sx={{ display: 'flex' }}>
        <TagsBar width={TAGS_BAR_WIDTH} />
        <NotesBar width={NOTES_BAR_WIDTH} />
        <Box
          component={'section'}
          sx={{ width: '100%', height: 'calc(100vh - 44px)', backgroundColor: 'primary.main', overflowY: 'hidden' }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
