import { Stack, Typography } from '@mui/material'

import { iconItems } from '../../utils/iconArrays.js'
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from '../Hero.jsx'
export const HeroText= () => {
  return (
      <Stack
          className={'all-text'}
          spacing={1}
          sx={{
              zIndex: 2,
              minWidth: '60%',
              width: '100%',
              pt: {
                  xs: `${HEADER_HEIGHT_MOBILE + 20}px`,
                  md: `${HEADER_HEIGHT_DESKTOP}px`,
              },
          }}
      >
          <Typography
              color={'textSecondary'}
              sx={{
                  fontSize: (theme) => theme.typography.customSizes,
                  display: 'flex',
                  alignItems: 'center',
                  '&::before': {
                      content: '""',
                      width: 20,
                      height: 2,
                      backgroundColor: 'secondary.main',
                      mr: 1,
                      display: 'inline-block',
                  },
              }}
          >
              FIRMA BUDOWLANA CIRRUS
          </Typography>
          <Stack
              className={'bold-subtitle'}
              direction={{ lg: 'row' }}
              spacing={4}
              sx={{
                  textTransform: 'uppercase',
                  position: 'relative',
                  top: 12,
                  '& .MuiTypography-root': {
                      fontWeight: 600,
                  },
              }}
          >
              <Typography variant='h3' color='textWhite'>
                  solidny
              </Typography>
              <Typography variant='h3' color={'textSecondary'}>
                  i zaufany
              </Typography>
              <Typography variant='h3' color={'textWhite'}>
                  partner
              </Typography>
          </Stack>
          <Typography
              variant='subtitle1'
              color={'textDiesel'}
              sx={{
                  pt: 3,
              }}
          >
              Kompleksowa realizacja inwestycji budowlanych.
              <br />
              Jakość, terminowość i bezpieczeństwo na każdym etapie budowy
          </Typography>
          <Stack
              className={'icons-below'}
              direction='row'
              sx={{
                  minHeight: '2rem',
                  pt: 3,
                  // gap: {
                  //     xs: 1,
                  //     sm: 2,
                  //     md: 3,
                  // },
                  justifyContent: 'space-between',
                  width: { xs: '90%', md: '70%' },
              }}
          >
              {iconItems.map(({ Icon, value, label }, index) => (
                  <Stack
                      key={index}
                      direction='row'
                      spacing={1}
                      sx={{ alignItems: 'center' }}
                  >
                      <Icon
                          sx={{
                              color: 'secondary.main',
                              mr: 1,
                              fontSize: {
                                  xs: 16,
                                  sm: 30,
                                  md: 40,
                              },
                          }}
                      />
                      <Stack sx={{ height: '100%', width: '100%' }}>
                          <Typography
                              color={'textWhite'}
                              sx={{
                                  fontWeight: 600,
                                  fontSize: {
                                      xs: 12,
                                      sm: 16,
                                      md: 18,
                                  },
                                  lineHeight: 1.5,
                              }}
                          >
                              {value}
                          </Typography>
                          <Typography
                              variant='body2'
                              color={'textWhite'}
                              sx={{
                                  textTransform: 'uppercase',
                                  fontSize: {
                                      xs: 8,
                                      sm: 12,
                                  },
                                  lineHeight: 1.2,
                              }}
                          >
                              {label}
                          </Typography>
                      </Stack>
                  </Stack>
              ))}
          </Stack>
      </Stack>
  )
}