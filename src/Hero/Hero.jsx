import Box from '@mui/material/Box'
import Rakowiecka from '/src/assets/krakow-rakowiecka.jpg'
/** @type string */
import CirrusLogo from '/src/assets/logo-white-transp.png'
import { Button, Stack, Typography } from '@mui/material'

export const Hero = () => {
    return (
        <Stack
            sx={{
                position: 'relative',
                height: {xs: 340, sm: 340, md: 400},
                width: '100%',
                overflow: 'hidden',
                minWidth: 360,
            }}
        >
            <Box
                component='img'
                src={Rakowiecka}
                alt='construction'
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                    transform: {
                        xs: 'scale(1.8)',
                        sm: 'scale(1.2)',
                        md: 'scale(1)',
                    },
                    transition: 'transform 0.2s ease-in',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                linear-gradient(90deg,
                rgba(30, 30, 27, 0.98) 5%,
                rgba(18, 18, 18, 1) 50%,
                rgba(18, 18, 18, 0.88) 52%,
                rgba(18, 18, 18, 0.77) 54%,
                rgba(238, 130, 238, 0.06) 100%
                )`,
                }}
            />
            <Stack
                direction='row'
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: {
                        xs: '70%',
                        md: '50%',
                    },
                    alignItems: 'flex-start',
                    justifyContent: {
                        sm: 'flex-start',
                    },
                    pl: {
                        xs: 2,
                        sm: 4,
                    },
                    maxWidth: '100%',
                    pt: {
                        xs: 2,
                        sm: 4,
                    },
                }}
            >
                <Box
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
                    }}
                >
                    <img
                        width={'100%'}
                        height={'auto'}
                        src={CirrusLogo}
                        alt='cirrus logo'
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: {
                                xs: 70,
                                sm: 146,
                            },
                            left: 0,
                            zIndex: 2,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            pl: {
                                xs: 1,
                                sm: 4,
                            },
                            maxWidth: '70%',
                        }}
                    >
                        <Typography
                            color={'textSecondary'}
                            sx={{
                                fontSize: (theme) =>
                                    theme.typography.customSizes,
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
                        <Typography
                            variant='h1'
                            color='textWhite'
                            sx={{
                                textTransform: 'uppercase',
                                position: 'relative',
                                top: 12,
                            }}
                        >
                            zaufany
                        </Typography>
                        <Typography
                            variant='h1'
                            color={'textSecondary'}
                            sx={{
                                position: 'relative',
                                top: 12,
                            }}
                        >
                            i solidny
                        </Typography>
                        <Typography
                            variant='h1'
                            color={'textWhite'}
                            sx={{
                                position: 'relative',
                                top: 12,
                            }}
                        >
                            partner
                        </Typography>
                        <Typography
                            variant='body2'
                            color={'textDiesel'}
                            sx={{
                                pt: 1,
                            }}
                        >
                            Kompleksowa realizacja inwestycji budowlanych.
                            <br />
                            Jakość, terminowość i bezpieczeństwo
                            <br />
                            na każdym etapie budowy
                        </Typography>
                    </Box>
                </Box>
                <Stack
                    direction='row'
                    sx={{
                        width: {
                            xs: '65%',
                            md: '60%',
                            lg: '75%',
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
                    <Button
                        variant='text'
                        sx={{
                            justifyContent: 'left',
                            p: 0,
                        }}
                    >
                        <Typography
                            color={'textWhite'}
                            variant='body1'
                            align={'left'}
                            sx={{
                                fontSize: (theme) =>
                                    theme.typography.customSizes,
                                textShadow: '0px 0px 3px rgba(149, 2, 2, 1)',
                            }}
                        >
                            {' '}
                            O FIRMIE
                        </Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography
                            color={'textWhite'}
                            variant='body1'
                            sx={{
                                fontSize: (theme) =>
                                    theme.typography.customSizes,
                                textShadow: '0px 0px 3px  rgba(149, 2, 2, 1)',
                            }}
                        >
                            {' '}
                            REALIZACJE
                        </Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography
                            color={'textWhite'}
                            variant='body1'
                            sx={{
                                fontSize: (theme) =>
                                    theme.typography.customSizes,
                                textShadow: '0px 0px 3px rgba(149, 2, 2,1)',
                            }}
                        >
                            KONTAKT
                        </Typography>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
