import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface SidebarProps {
  width: number
  children: ReactNode
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { width, children } = props
  return (
    <Box
      component={'aside'}
      padding={2}
      sx={{
        minWidth: width,
        maxWidth: width,
        height: 'calc(100vh - 44px)',
        borderRight: 1,
        borderColor: 'divider'
      }}
    >
      {children}
    </Box>
  )
}
