import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { notesReducer } from '@/entities/Note'
import { tagsReducer } from '@/entities/Tag'

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      notes: notesReducer,
      tags: tagsReducer
    },
    devTools: true,
    preloadedState: initialState
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']