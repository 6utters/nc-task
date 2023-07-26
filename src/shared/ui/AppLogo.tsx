import { FC } from 'react'
import { Box, Link as MuiLink, SvgIcon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AppLogoIcon from '@/shared/assets/icons/app-logo.svg'

export const AppLogo: FC = () => {
  return (
    <MuiLink component={Link} to={'/'} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <SvgIcon component={AppLogoIcon} fontSize={'large'} inheritViewBox />
      <Typography variant='h6' component='h2' sx={{ color: 'contrast1.main', fontWeight: 700 }}>
        App&nbsp;
        <Box component={'span'} sx={{ color: 'accent.main', fontWeight: 700 }}>
          Notes
        </Box>
      </Typography>
    </MuiLink>
  )
}
