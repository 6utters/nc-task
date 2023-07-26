import { FC } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getNearbyNoteId, notesActions } from '@/entities/Note'
import { db } from '../../../../db'
import { IconButton, Toolbar } from '@mui/material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

interface NotePageToolsProps {
  noteId: string
}

export const NotePageTools: FC<NotePageToolsProps> = (props) => {
  const { noteId } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const nearbyId = useSelector(getNearbyNoteId(noteId))

  const onAddNoteClick = () => {
    navigate(`../notes/${Date.now().toString()}`)
  }

  const onDeleteClick = () => {
    db.notes.delete(noteId)
    dispatch(notesActions.deleteNote(noteId))
    if (nearbyId) {
      navigate(`../notes/${nearbyId}`)
    } else {
      navigate(`../notes/${Date.now().toString()}`)
    }
  }

  return (
    <Toolbar
      component={'nav'}
      disableGutters
      sx={{
        px: '8px',
        justifyContent: 'space-between'
      }}
    >
      <IconButton aria-label='delete_note' sx={{ color: 'accent.main', padding: '8px' }} onClick={onDeleteClick}>
        <DeleteOutlineOutlinedIcon sx={{ width: '26px', height: '26px' }} />
      </IconButton>
      <IconButton aria-label='add_note' sx={{ color: 'accent.main', padding: '8px' }} onClick={onAddNoteClick}>
        <EditNoteOutlinedIcon sx={{ width: '26px', height: '26px' }} />
      </IconButton>
    </Toolbar>
  )
}
