import { createSelector } from '@reduxjs/toolkit'
import { getNotes } from './getNotes'
import { Note } from '@/entities/Note'

export const getFilteredNotes = (tags?: string[]) => createSelector(getNotes, (notes) => {
  let result: Note[] = []
  if (tags) {
    for (let i = 0; i < notes.length; i++) {
      if (tags.every(tag => notes[i].tags.includes(tag))) {
        result.push(notes[i])
      }
    }
  }
  return result
})