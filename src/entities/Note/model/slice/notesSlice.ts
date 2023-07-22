import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note, NotesSchema } from '../types/NotesSchema'

const initialState: NotesSchema = {
  notes: []
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      const newNote: Note = {
        id: action.payload,
        text: '',
        tags: []
      }
      state.notes.push(newNote)
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const noteIndex = state.notes.findIndex(note => note.id === action.payload.id)
      if (noteIndex == -1) {
        return
      }
      const note = state.notes[noteIndex]
      state.notes[noteIndex] = {
        ...note,
        ...action.payload
      }
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload)
    }
  }
})

export const { actions: notesActions, reducer: notesReducer } = notesSlice
