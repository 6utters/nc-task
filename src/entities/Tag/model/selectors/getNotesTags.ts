import { createSelector } from '@reduxjs/toolkit'
import { getNotes } from '@/entities/Note'

export const getNotesTags = createSelector(getNotes, notes => {
  const allTags: string[] = []
  notes.forEach(note => allTags.push(...note.tags))
  return allTags
})