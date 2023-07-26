import { FC } from 'react'
import { NoteField } from '@/entities/Note'
import { useParams } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { NotePageTools } from './NotePageTools'

export const NotePage: FC = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>Loading</div>
  }

  return (
    <MainLayout>
      <NotePageTools noteId={id} />
      <NoteField noteId={id} />
    </MainLayout>
  )
}
