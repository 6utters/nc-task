import { FC } from 'react'
import { Box, Chip, SxProps, Theme, Typography } from '@mui/material'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { tagsActions } from '../model/slice/tagsSlice'
import { useSelector } from 'react-redux'
import { getIsWithTags } from '@/entities/Tag'

interface TagListProps {
  tags: string[]
  selectedTags: string[]
  onTagClick: (tag: string) => void
}

export const TagList: FC<TagListProps> = (props) => {
  const { tags, selectedTags, onTagClick } = props
  const dispatch = useAppDispatch()
  const isWithTags = useSelector(getIsWithTags)

  const onAllTagClick = () => {
    dispatch(tagsActions.toggleWithTags())
  }

  const getChipStyles = (isActive: boolean): SxProps<Theme> => ({
    backgroundColor: isActive ? 'accent.main' : 'selected.main',
    color: isActive ? 'primary.main' : '',
    borderRadius: '6px',
    fontSize: '15px',
    userSelect: 'none',
    fontWeight: 600,
    ':hover': {
      backgroundColor: 'accent.main'
    }
  })

  return (
    <>
      <Typography sx={{ fontWeight: 600, lineHeight: '44px', fontSize: '20px' }}>Tags</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Chip label={'All Tags'} onClick={onAllTagClick} sx={getChipStyles(isWithTags)} />
        {tags.map((tag) => (
          <Chip key={tag} sx={getChipStyles(selectedTags.includes(tag))} onClick={() => onTagClick(tag)} label={tag} />
        ))}
      </Box>
    </>
  )
}
