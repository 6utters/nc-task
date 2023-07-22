import { createSelector } from '@reduxjs/toolkit'
import { getNotes } from '@/entities/Note'

export const getNoteById = (id: string) => createSelector(getNotes, notes => {
  return notes.find(note => note.id == id)
})