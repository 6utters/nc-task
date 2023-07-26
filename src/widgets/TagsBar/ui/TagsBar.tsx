import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Sidebar } from '@/shared/ui/Sidebar'
import { getTags, TagList, tagsActions } from '@/entities/Tag'
import { getSelectedTags } from '@/entities/Tag/model/selectors/getSelectedTags'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

interface TagsBarProps {
  width: number
}

export const TagsBar: FC<TagsBarProps> = (props) => {
  const { width } = props
  const dispatch = useAppDispatch()
  const tags = useSelector(getTags)
  const selectedTags = useSelector(getSelectedTags)

  const onTagClick = useCallback(
    (tag: string) => {
      if (selectedTags.includes(tag)) {
        return dispatch(tagsActions.unselectTag(tag))
      }
      return dispatch(tagsActions.selectTag(tag))
    },
    [dispatch, selectedTags]
  )

  return (
    <Sidebar width={width}>
      <TagList tags={tags} selectedTags={selectedTags} onTagClick={onTagClick} />
    </Sidebar>
  )
}
