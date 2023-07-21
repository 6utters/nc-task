import { FC } from 'react'
import { Sidebar } from '@/ui/Sidebar'

interface NotesBarProps {
  width: number
}

export const NotesBar: FC<NotesBarProps> = (props) => {
  const { width } = props
  return (
    <Sidebar width={width}>
      notes
    </Sidebar>
  )
}
