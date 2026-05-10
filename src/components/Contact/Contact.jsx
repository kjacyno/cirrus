import { Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import ContactMailIcon from '@mui/icons-material/ContactMail'

export const Contact = () => {
    return (
        <Grid
            id={'contact'}
            container
            sx={{
                width: '100%',
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4, md: 8 },
                position: 'relative',
            }}
        >
            <Grid size={{ xs: 12, md: 6 }} sx={{ mb: 6 }}>
                <Stack spacing={2}>
                    <Typography
                        color={'textSecondary'}
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            fontSize: { xs: 16, md: 18 },
                        }}
                    >
                        Kontakt
                    </Typography>

                    <Typography
                        variant={'h4'}
                        color={'textPrimary'}
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Planujesz inwestycję budowlaną? Zrealizujmy ją razem.
                    </Typography>
                    <Typography>
                        Skontaktuj się z nami w celu omówienia projektu i
                        otrzymaj bezpłatną wycenę.
                    </Typography>
                </Stack>
            </Grid>
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack spacing={5}>
                    <IconButton
                        sx={{
                            color: 'primary.main',
                            justifyContent: 'flex-start',
                        }}
                        disableRipple={true}
                        disableFocusRipple={true}
                    >
                        <PhoneIcon sx={{ mr: 4, fontSize: 40 }} />
                        <Link href='tel:+48887842913' underline='none'>
                            <Typography color={'textPrimary'} variant={'h6'}>
                                +48 887 842 913
                            </Typography>
                        </Link>
                    </IconButton>
                    <IconButton
                        sx={{
                            color: 'primary.main',
                            justifyContent: 'flex-start',
                        }}
                        disableRipple={true}
                        disableFocusRipple={true}
                    >
                        <ContactMailIcon sx={{ mr: 4, fontSize: 40 }} />
                        <Link href='mailto:cirrus@wp.pl' underline='none'>
                            <Typography color={'textPrimary'} variant={'h6'}>
                                cirrus@wp.pl
                            </Typography>
                        </Link>
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>
    )
}
