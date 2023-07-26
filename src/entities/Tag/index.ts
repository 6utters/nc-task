export type { TagsSchema } from './model/types/TagsSchema'
export { tagsReducer, tagsActions } from './model/slice/tagsSlice'
// export { TagsBlock } from './ui/TagsBlock/TagsBlock'
export { TagList } from './ui/TagList'
export { getTags } from './model/selectors/getTags'
// export { getNotesTags } from './model/selectors/getNotesTags'
export { getSelectedTags } from './model/selectors/getSelectedTags'
export { getIsWithTags } from './model/selectors/getIsWithTags'
