import { FC } from 'react'
import { Sidebar } from '@/ui/Sidebar'
import { Box, Card, List, ListItem } from '@mui/material'

interface NotesBarProps {
  width: number
}

export const NotesBar: FC<NotesBarProps> = (props) => {
  const { width } = props

  const notes = [
    {
      text: 'asdfsdafsad asdfasd fasdf',
      id: '1'
    },
    {
      text: 'asdfsdafsad asdfasd fasdf',
      id: '2'
    },
    {
      text: 'asdfsdafsad asdfasd fasdf',
      id: '3'
    },
    {
      text: 'asdfsdafsad asdfasd fasdf',
      id: '4'
    }
  ]

  return (
    <Sidebar width={width}>
      <List sx={{
        background: '#ffffff', borderRadius: '12px', padding: 0
      }}>
        {notes.map(note =>
          <ListItem
            sx={{
              height: '92px', borderBottom: 1, borderColor: 'divider', '&:last-child': {
                borderBottom: 0
              }
            }}
            key={note.id}>
            {note.text}
          </ListItem>
        )}
      </List>
    </Sidebar>
  )
}
