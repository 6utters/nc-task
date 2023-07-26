import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TagsSchema } from '../types/TagsSchema'

const initialState: TagsSchema = {
  tags: [],
  selectedTags: [],
  withTags: false
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags.filter((tag) => tag !== action.payload)
    },
    selectTag: (state, action: PayloadAction<string>) => {
      state.withTags = false
      state.selectedTags.push(action.payload)
    },
    unselectTag: (state, action: PayloadAction<string>) => {
      state.selectedTags = state.selectedTags.filter((tag) => tag !== action.payload)
    },
    toggleWithTags: (state) => {
      if (state.withTags) {
        state.withTags = false
      } else {
        state.selectedTags = []
        state.withTags = true
      }
    }
  }
})

export const { actions: tagsActions, reducer: tagsReducer } = tagsSlice
