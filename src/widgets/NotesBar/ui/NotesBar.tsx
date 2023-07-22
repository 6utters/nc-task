import { FC } from 'react'
import { Sidebar } from '@/shared/ui/Sidebar'
import { Box, List, ListItem, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getNotes } from '@/entities/Note'
import { Link, useLocation, useParams } from 'react-router-dom'
import './NotesBar.css'
import { Block } from '@mui/icons-material'
import { getRouteNote } from '@/shared/consts/router'
import { filterText } from '@/shared/lib/filterText'
import { getFilteredNotes } from '@/entities/Note/model/selectors/getFilteredNotes'
import { getSelectedTags } from '@/entities/Tag/model/selectors/getSelectedTags'

interface NotesBarProps {
  width: number
}

export const NotesBar: FC<NotesBarProps> = (props) => {
  const { width } = props
  const { pathname } = useLocation()
  const selectedTags = useSelector(getSelectedTags)
  const notes = useSelector(getFilteredNotes(selectedTags))

  return (
    <Sidebar width={width}>
      {notes.length ?
        <List sx={{
          background: '#ffffff', borderRadius: '12px'
        }}>
          {notes.map(note =>
            <Link key={note.id} to={getRouteNote(note.id)} className={'note-title'}>
              <ListItem
                className={pathname.split('/').at(-1) == note.id ? 'active' : ''}
                sx={{
                  height: '92px',
                  borderBottom: 1,
                  cursor: 'pointer',
                  borderColor: 'divider',
                  '&:last-child': {
                    borderBottom: 0
                  }
                }}
              >
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography
                    variant={'h6'}
                    sx={{ fontWeight: '700', width: '100%' }}
                  >
                    {note.text ? filterText(note.text, 47) : 'New note'}
                  </Typography>
                </Box>
              </ListItem>
            </Link>
          )}
        </List>
        : null
      }
    </Sidebar>
  )
}
