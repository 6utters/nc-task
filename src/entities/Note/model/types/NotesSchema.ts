// export interface NotesSchema {
//   notes: Note[]
// }

import { EntityState } from '@reduxjs/toolkit'

export interface NotesSchema extends EntityState<Note> {}

export interface Note {
  id: string
  text: string
  tags: string[]
}
