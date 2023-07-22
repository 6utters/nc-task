import { FC, useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import { useSelector } from 'react-redux'
import { getNotes, Note, NoteField, notesActions } from '@/entities/Note'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { TagsBlock } from '@/entities/Tag'
// @ts-ignore
import { ReactComponent as BinIcon } from '@/shared/assets/icons/bin-icon.svg'
import './NotePage.css'
import { db } from '../../../../db'

export const NotePage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const notes = useSelector(getNotes)

  useEffect(() => {
    if (id && !notes.find(note => note.id == id)) {
      dispatch(notesActions.addNote(id))
    }
  }, [dispatch, id])

  if (!id) {
    return <div>Loading</div>
  }

  const onDeleteClick = () => {
    db.notes.delete(id)
    const index = notes.findIndex(note => note.id == id)
    const prevNote = notes[index - 1]
    const nextNote = notes[index + 1]
    if (!prevNote) {
      navigate(`'notes/${nextNote.id}`)
      return dispatch(notesActions.deleteNote(id))
    }
    navigate(`'notes/${prevNote.id}`)
    dispatch(notesActions.deleteNote(id))
  }

  return (
    <Box className={'note-page'}>
      <NoteField noteId={id} />
      <TagsBlock noteId={id} />
      {notes.length > 1 ?
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ justifySelf: 'flex-end' }} onClick={onDeleteClick}>
            <BinIcon width={40} height={40} />
          </button>
        </Toolbar> : null}
    </Box>
  )
}
