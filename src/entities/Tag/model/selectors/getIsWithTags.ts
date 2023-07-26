import { StateSchema } from '@/app/providers/store'

export const getIsWithTags = (state: StateSchema) => state.tags.withTags ?? false