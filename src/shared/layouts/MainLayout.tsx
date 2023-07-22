import { FC, ReactNode } from 'react'
import { Header } from '@/widgets/Header/ui/Header'
import { Box } from '@mui/material'
import { NotesBar } from '@/widgets/NotesBar/ui/NotesBar'
import { TagsBar } from '@/widgets/TagsBar/ui/TagsBar'

interface MainLayoutProps {
  children: ReactNode
}

const ASIDE_WIDTH = 350

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props
  return (
    <div className='main-layout'>
      <Header />
      <Box component={'main'} sx={{ display: 'flex' }}>
        <TagsBar width={ASIDE_WIDTH} />
        <NotesBar width={ASIDE_WIDTH} />
        <section className={'content'}>{children}</section>
      </Box>
    </div>
  )
}
