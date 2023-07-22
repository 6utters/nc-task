import { StateSchema } from '@/app/providers/store'

export const getNotes = (state: StateSchema) => state.notes.notes ?? []