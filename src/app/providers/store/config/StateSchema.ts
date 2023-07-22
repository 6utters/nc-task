import { NotesSchema } from '@/entities/Note'
import { TagsSchema } from '@/entities/Tag'

export interface StateSchema {
  notes: NotesSchema
  tags: TagsSchema
}