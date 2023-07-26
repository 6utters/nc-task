import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NoteList, getFilteredNotes } from '@/entities/Note'
import { Sidebar } from '@/shared/ui/Sidebar'

interface NotesBarProps {
  width: number
}

export const NotesBar: FC<NotesBarProps> = (props) => {
  const { width } = props
  const { id } = useParams<{ id: string }>()
  const notes = useSelector(getFilteredNotes)

  if (!id || !notes || notes.length == 0) {
    return <Sidebar width={width}>No notes</Sidebar>
  }

  return (
    <Sidebar width={width}>
      <NoteList notes={notes} pathId={id} />
    </Sidebar>
  )
}
