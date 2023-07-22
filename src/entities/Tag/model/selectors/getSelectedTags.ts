import { StateSchema } from '@/app/providers/store'

export const getSelectedTags = (state: StateSchema) => state.tags.selectedTags ?? []