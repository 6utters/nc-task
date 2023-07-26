import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Note } from '../model/types/NotesSchema'
import { getRouteNote } from '@/app/providers/router'
import { List, ListItemButton, Typography } from '@mui/material'

interface NoteListProps {
  notes: Note[]
  pathId: string
}

export const NoteList: FC<NoteListProps> = (props) => {
  const { notes, pathId } = props
  return (
    <List
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: '8px',
        padding: 0
      }}
    >
      {notes.map((note) => (
        <ListItemButton
          selected={pathId == note.id}
          component={Link}
          to={getRouteNote(note.id)}
          key={note.id}
          sx={{
            flexDirection: 'column',
            minHeight: '92px',
            maxHeight: '92px',
            borderBottom: 1,
            borderColor: 'divider',
            padding: '14px 30px',
            overflow: 'hidden',
            ':hover': {
              backgroundColor: 'selected.main',
              borderBottom: 0
            },
            '&:first-of-type': {
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px'
            },
            '&:last-child': {
              borderBottom: 0,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px'
            },
            '&.Mui-selected': {
              backgroundColor: 'selected.main',
              borderBottom: 0
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'rgba(120,120,128,0.12)'
            }
          }}
        >
          <Typography
            variant={'h6'}
            component={'p'}
            sx={{
              height: '23px',
              width: '100%',
              fontWeight: '600',
              fontSize: '17px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {'the title of the note goes here'}
          </Typography>
          <Typography
            variant={'subtitle1'}
            component={'p'}
            color={'contrast2.main'}
            sx={{
              height: '22px',
              width: '100%',
              fontWeight: '400',
              fontSize: '15px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {note.text ? note.text : 'No additional text'}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  )
}
