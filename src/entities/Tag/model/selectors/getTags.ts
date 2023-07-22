import { StateSchema } from '@/app/providers/store'

export const getTags = (state: StateSchema) => state.tags.tags ?? []