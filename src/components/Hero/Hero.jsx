import Box from '@mui/material/Box'
import Rakowiecka from '/src/assets/krakow-rakowiecka.jpg'
/** @type string */
import CirrusLogo from '/src/assets/logo-white-transp.png'
import { Button, Stack, Typography } from '@mui/material'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'

export const Hero = () => {
    const iconItems = [
        {
            Icon: ShieldOutlinedIcon,
            value: '15+',
            label: 'lat doświadczenia',
        },
        {
            Icon: ApartmentOutlinedIcon,
            value: '100+',
            label: 'zrealizowanych inwestycji',
        },
        {
            Icon: GroupsOutlinedIcon,
            value: '100%',
            label: 'zaangażowania',
        },
    ]
    const navButtons = [
        {
            label: 'o firmie',
            scrollValue: 'about',
        },
        {
            label: 'realizacje',
            scrollValue: 'projects',
        },
        {
            label: 'kontakt',
            scrollValue: 'contact',
        },
    ]
    return (
        <Stack
            id={'hero-component'}
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                minWidth: 360,
                px: {
                    xs: 2,
                    sm: 4,
                },
                py: {
                    xs: 2,
                    sm: 4,
                },
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
                    objectFit: 'cover',
                    height: '100%',
                    objectPosition: '50% 50%',
                }}
            />

            <Box
                className={'gradient'}
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
                className={'top-row'}
                direction='row'
                sx={{
                    zIndex: 2,
                    height: '30%',
                    alignItems: 'flex-start',
                    justifyContent: {
                        sm: 'flex-start',
                    },
                    maxWidth: '100%',
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
                />
                <Stack
                    className={'nav-buttons'}
                    direction='row'
                    sx={{
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
                    {navButtons.map(({ label, scrollValue }, index) => (
                        <Button
                            key={index}
                            variant='text'
                            sx={{
                                justifyContent: 'left',
                                p: 0,
                            }}
                            onClick={() => {
                                const target =
                                    document.getElementById(scrollValue)
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: 'smooth',
                                    })
                                }
                            }}
                        >
                            <Typography
                                color={'textWhite'}
                                align={'left'}
                                sx={{
                                    fontSize: (theme) =>
                                        theme.typography.customSizes,
                                    textShadow: `2px 2px 2px #950202,
                                     -1px -1px 0 #950202,
                                     1px -1px 0 #950202,
                                     -1px 1px 0 #950202,
                                     1px 1px 0 #950202`,
                                }}
                            >
                                {label}
                            </Typography>
                        </Button>
                    ))}
                </Stack>
            </Stack>
            <Stack
                className={'all-text'}
                spacing={1}
                sx={{
                    zIndex: 2,
                    pt: 4,
                    minWidth: '60%',
                    width: '100%',
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
                        gap: {
                            xs: 1,
                            sm: 2,
                            md: 3,
                        },
                        justifyContent: 'space-between',
                        width: { xs: '90%', md: '50%' },
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
                                        xs: 18,
                                        sm: 22,
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
                                            sm: 14,
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
                                            sm: 10,
                                            md: 12,
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
        </Stack>
    )
}
