import {Stack} from '@mui/material'
import Box from '@mui/material/Box'
import CirrusLogo from '/src/assets/logo-white-transp.png'
import {NavButtons} from '/src/components/Hero/NavButtons/NavButtons.jsx'
import { MobileNav } from '/src/components/Hero/MobileNav/MobileNav.jsx'
import {
    HEADER_HEIGHT_DESKTOP,
    HEADER_HEIGHT_MOBILE,
} from '/src/components/Hero/Hero.jsx'

export const TopRow = () => {
  return (
      <Stack
          className={'top-row'}
          direction='row'
          sx={{
              zIndex: 10,
              maxHeight: {
                  xs: HEADER_HEIGHT_MOBILE,
                  md: HEADER_HEIGHT_DESKTOP,
              },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              px: { xs: 2, sm: 4 },
            pt:4,
              pb: 3,

              boxSizing: 'border-box',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(18,18,18,0.7)',
          }}
      >
          <Box
              component='img'
              sx={{
                  width: {
                      xs: '7rem',
                      sm: '8rem',
                      md: '10rem',
                      lg: '13rem',
                  },
                  height: 'auto',
                  pr: 2,
                  mr: {
                      xs: 1,
                      sm: 6,
                  },
                  objectFit: 'cover',
              }}
              src={CirrusLogo}
              alt='cirrus logo'
              onClick={() => scrollTo(top)}
          />
          <Stack
              className={'nav-buttons'}
              direction={{ xs: 'column', md: 'row' }}
              sx={{
                  position: { xs: 'relative', md: 'static' },
                  display: { xs: 'none', md: 'flex' },
                  width: {
                      xs: '70%',
                      md: '60%',
                      lg: '65%',
                  },
                  justifyContent: 'space-between',
                  ml: {
                      xs: 0,
                      sm: 3,
                      md: 0,
                      lg: 3,
                  },
              }}
          >
              <NavButtons mobile={false} />
          </Stack>
          <MobileNav />
      </Stack>
  )
}