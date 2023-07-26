import { createSelector } from '@reduxjs/toolkit'
import { notesSelector } from '..//slice/notesSlice'
import { getIsWithTags, getSelectedTags } from '@/entities/Tag'
import { Note } from '@/entities/Note'

export const getFilteredNotes = createSelector(
  notesSelector.selectAll,
  getSelectedTags,
  getIsWithTags,
  (notes, tags, withTags) => {
    if (withTags) {
      const notesWithTags: Note[] = []

      notes.forEach((note) => {
        if (note.tags.length > 0) {
          notesWithTags.push(note)
        }
      })
      return notesWithTags
    } else {
      if (tags.length !== 0) {
        const filteredNotes: Note[] = []

        for (let i = 0; i < notes.length; i++) {
          if (tags.every((tag) => notes[i].tags.includes(tag))) {
            filteredNotes.push(notes[i])
          }
        }
        return filteredNotes
      }
      return notes
    }
  }
)
