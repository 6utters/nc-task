import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { notesSelector, notesActions } from '../../model/slice/notesSlice'
import { db } from '../../../../../db'
import { StateSchema } from '@/app/providers/store'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { highlightTags } from '@/shared/lib/highlightTags'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useSyncScrolls } from '@/shared/hooks/useSyncScrolls'
import { Box } from '@mui/material'
import './NoteField.css'

interface NoteFieldProps {
  noteId: string
}

export const NoteField: FC<NoteFieldProps> = (props) => {
  const { noteId } = props
  const dispatch = useAppDispatch()
  const note = useSelector((state: StateSchema) => notesSelector.selectById(state, noteId))

  const [noteText, setNoteText] = useState(note?.text ?? '')
  const [highlightedText, setHighlightedText] = useState(noteText)

  const debouncedNoteText = useDebounce(noteText, 500)
  const { componentRef: backdrop, handleScroll } = useSyncScrolls()

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value)
    setHighlightedText(highlightTags(e.target.value))
  }

  const onBlurHandler = () => {
    const noteTags = [...new Set(noteText.split(' ').filter((word) => word.startsWith('#')))]
    dispatch(
      notesActions.editNote({
        id: noteId,
        changes: {
          tags: noteTags,
          text: noteText
        }
      })
    )
    db.notes.put({
      id: noteId,
      text: noteText,
      tags: noteTags
    })
  }

  useEffect(() => {
    if (!note) {
      dispatch(
        notesActions.addNote({
          id: noteId,
          text: '',
          tags: []
        })
      )
      db.notes.add({
        id: noteId,
        text: '',
        tags: []
      })
    } else {
      setNoteText(note.text)
      setHighlightedText(highlightTags(note.text))
    }
  }, [note])

  useEffect(() => {
    if (debouncedNoteText) {
      const noteTags = [...new Set(noteText.split(' ').filter((word) => word.startsWith('#')))]
      dispatch(
        notesActions.editNote({
          id: noteId,
          changes: {
            tags: noteTags,
            text: noteText
          }
        })
      )
      db.notes.put({
        id: noteId,
        text: noteText,
        tags: noteTags
      })
    }
  }, [debouncedNoteText])

  return (
    <Box className={'container'}>
      <Box ref={backdrop} className='backdrop' dangerouslySetInnerHTML={{ __html: highlightedText }}></Box>
      <textarea
        className='textarea'
        value={noteText}
        onChange={onChangeHandler}
        onScroll={handleScroll}
        onBlur={onBlurHandler}
      ></textarea>
    </Box>
  )
}
