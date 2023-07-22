import React, { FC, useState } from 'react'
import {
  Box, Chip,
  Typography
} from '@mui/material'
import { Sidebar } from '@/shared/ui/Sidebar'
import { useSelector } from 'react-redux'
import { getTags, tagsActions } from '@/entities/Tag'
import { getSelectedTags } from '@/entities/Tag/model/selectors/getSelectedTags'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import './TagsBar.css'

interface TagsBarProps {
  width: number
}

export const TagsBar: FC<TagsBarProps> = (props) => {
  const { width } = props
  const dispatch = useAppDispatch()
  const tags = useSelector(getTags)
  const selectedTags = useSelector(getSelectedTags)

  const [isAllTags, setIsAllTags] = useState(false)

  const onTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      dispatch(tagsActions.unselectTag(tag))
      return
    }
    dispatch(tagsActions.selectTag(tag))
  }

  const onAllTagClick = () => {
    if (isAllTags) {
      dispatch(tagsActions.unselectAll())
      setIsAllTags(false)
      return
    }
    dispatch(tagsActions.selectAll())
    setIsAllTags(true)
  }

  return (
    <Sidebar width={width}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
        Tags:
      </Typography>
      {tags.length > 0 &&
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <div onClick={onAllTagClick}>
            <Chip
              className={isAllTags ? 'active-tag' : ''}
              variant='outlined'
              label='All Tags'
              sx={{ cursor: 'pointer' }}
            />
          </div>
          {tags?.map((tag, index) =>
            <div key={tag + index} onClick={() => onTagClick(tag)}>
              <Chip
                className={selectedTags.includes(tag) ? 'active-tag' : ''}
                variant='outlined'
                label={tag}
                sx={{ cursor: 'pointer' }} />
            </div>
          )}
        </Box>
      }
    </Sidebar>
  )
}
