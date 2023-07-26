import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Note, NotesSchema } from '../types/NotesSchema'
import { StateSchema } from '@/app/providers/store'

const notesAdapter = createEntityAdapter<Note>({
  selectId: (note) => note.id
})

export const notesSelector = notesAdapter.getSelectors<StateSchema>(
  (state) => state.notes || notesAdapter.getInitialState()
)

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState<NotesSchema>({
    ids: [],
    entities: {}
  }),
  reducers: {
    addNote: notesAdapter.addOne,
    deleteNote: notesAdapter.removeOne,
    setNotes: notesAdapter.setAll,
    editNote: notesAdapter.updateOne
  }
})

export const { actions: notesActions, reducer: notesReducer } = notesSlice
