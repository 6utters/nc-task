import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { useSelector } from 'react-redux'
import { getNoteById, notesActions } from '@/entities/Note'
import { highlightTags } from '@/shared/lib/highlightTags'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getNotesTags } from '@/entities/Tag/model/selectors/getNotesTags'
import { tagsActions } from '@/entities/Tag'
import './NoteField.css'
import { db } from '../../../../../db'

interface NoteFieldProps {
  noteId: string
}

export const NoteField: FC<NoteFieldProps> = (props) => {
  const { noteId } = props
  const dispatch = useAppDispatch()

  const note = useSelector(getNoteById(noteId))
  const tags = useSelector(getNotesTags)

  const [noteText, setNoteText] = useState(note?.text ?? '')
  const [highlightedText, setHighlightedText] = useState(noteText)
  const debouncedSearchTerm = useDebounce(noteText, 500)

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value)
  }

  useEffect(() => {
    setNoteText(note?.text ?? '')
  }, [note?.text])

  useEffect(() => {
    if (debouncedSearchTerm) {
      const noteTags = [...new Set(noteText.split(' ').filter(word => word.startsWith('#')))]
      dispatch(notesActions.editNote({
        id: noteId,
        tags: noteTags,
        text: noteText
      }))
      db.notes.put({
        id: noteId,
        text: noteText,
        tags: noteTags
      })
    }
  }, [debouncedSearchTerm])

  useEffect(() => {
    dispatch(tagsActions.setTags(tags))
  }, [debouncedSearchTerm, tags])

  useEffect(() => {
    setHighlightedText(highlightTags(noteText))
  }, [noteText])

  return (
    <div className={'container'}>
      <div className={'backdrop'}>
        <div className='highlights' dangerouslySetInnerHTML={{ __html: highlightedText }}></div>
      </div>
      <textarea value={noteText} onChange={onChangeHandler}></textarea>
    </div>
  )
}

