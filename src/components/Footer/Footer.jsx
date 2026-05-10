import { Button, Grid, Stack, Typography } from '@mui/material'
import CirrusLogo from '/src/assets/logo-white-transp.png'
import Box from '@mui/material/Box'
import { navButtons } from '../utils/navButtons.js'
import PhoneIcon from '@mui/icons-material/Phone'
import ContactMailIcon from '@mui/icons-material/ContactMail'

export const Footer = () => {
    return (
        <Grid
            id={'footer'}
            container
            sx={{
                width: '100%',
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4, md: 4 },
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.93)',
                justifyContent: 'space-between',
            }}
        >
            <Grid size={{ xs: 6, md: 3 }}>
                <Stack spacing={2}>
                    <Box
                        component='img'
                        sx={{
                            width: '10rem',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                        src={CirrusLogo}
                        alt='cirrus logo'
                    />
                    <Typography color={'textDiesel'}>
                        Solidne budownictwo. <br />
                        Zaufany partner w realizacji Twoich inwestycji
                    </Typography>
                </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
                <Stack sx={{ ml: 6 }}>
                    <Typography
                        color={'textDiesel'}
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            mb: 2,
                        }}
                    >
                        nawigacja
                    </Typography>
                    {navButtons.map(({ label, scrollValue }, index) => (
                        <Button
                            key={index}
                            variant='text'
                            sx={{
                                justifyContent: 'left',
                                p: 0,
                                mb: 1,
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
                                    fontSize: 14,
                                }}
                            >
                                {label}
                            </Typography>
                        </Button>
                    ))}
                </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
                <Stack sx={{ ml: 6 }}>
                    <Typography
                        color={'textDiesel'}
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            mb: 2,
                        }}
                    >
                        usługi
                    </Typography>
                    <Typography
                        color={'textWhite'}
                        sx={{ fontSize: 14, mb: 1 }}
                    >
                        Budownictwo komercyjne
                    </Typography>
                    <Typography
                        color={'textWhite'}
                        sx={{ fontSize: 14, mb: 1 }}
                    >
                        Budownictwo mieszkaniowe
                    </Typography>

                    <Typography
                        color={'textWhite'}
                        sx={{ fontSize: 14, mb: 1 }}
                    >
                        Remonty i modernizacje
                    </Typography>
                </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
                <Stack sx={{ ml: 6 }}>
                    <Typography
                        color={'textDiesel'}
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            mb: 3,
                        }}
                    >
                        dane kontaktowe
                    </Typography>
                    <Stack direction={'row'} spacing={2} sx={{ mb: 2 }}>
                        <PhoneIcon sx={{ color: 'text.white', fontSize: 20 }} />
                        <Typography
                            color={'textWhite'}
                            sx={{ fontSize: 14, mb: 1 }}
                        >
                            +48 887 842 913
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <ContactMailIcon
                            sx={{ color: 'text.white', fontSize: 20 }}
                        />
                        <Typography
                            color={'textWhite'}
                            sx={{ fontSize: 14, mb: 1 }}
                        >
                            cirrus@wp.pl
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}
