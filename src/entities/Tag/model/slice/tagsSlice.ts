import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TagsSchema } from '../types/TagsSchema'
import { Note } from '@/entities/Note'

const initialState: TagsSchema = {
  tags: [],
  selectedTags: []
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags.filter(tag => tag !== action.payload)
    },
    selectTag: (state, action: PayloadAction<string>) => {
      state.selectedTags.push(action.payload)
    },
    unselectTag: (state, action: PayloadAction<string>) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload)
    },
    selectAll: (state) => {
      state.selectedTags = state.tags
    },
    unselectAll: (state) => {
      state.selectedTags = []
    }
  }
})

export const { actions: tagsActions, reducer: tagsReducer } = tagsSlice
