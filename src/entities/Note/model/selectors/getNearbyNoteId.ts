import { createSelector } from '@reduxjs/toolkit'
import { notesSelector } from '@/entities/Note/model/slice/notesSlice'

export const getNearbyNoteId = (noteId: string) =>
  createSelector(notesSelector.selectAll, (notes) => {
    if (notes.length > 1) {
      const index = notes.findIndex((note) => note.id == noteId)
      const prevNote = notes[index - 1]
      const nextNote = notes[index + 1]
      if (!prevNote) {
        return nextNote.id
      } else {
        return prevNote.id
      }
    }
    return undefined
  })
