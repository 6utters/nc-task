import { createSelector } from '@reduxjs/toolkit'
import { notesSelector } from '@/entities/Note/model/slice/notesSlice'

// export const getTags = (state: StateSchema) => state.tags.tags ?? []

export const getTags = createSelector(notesSelector.selectAll, (notes) => {
  const allTags: string[] = []
  notes.forEach((note) => allTags.push(...note.tags))
  return [...new Set(allTags)]
})
