import Salwator from '/src/assets/mikolow-salwator.jpg'
import { Grid, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

import { PartnersCarousel } from '/src/components/About/PartnersCarousel/PartnersCarousel.jsx'
import { summaryBoxes } from '/src/components/utils/iconArrays.js'

export const About = () => {
    return (
        <Grid
            id={'about'}
            container
            sx={{
                scrollMarginTop: '80px',
                width: '100%',
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4, md: 8 },
                position: 'relative',
            }}
        >
            <Grid size={{ xs: 12, md: 5 }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: 600,
                        pl: 4,
                        '& img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            borderRadius: 1,
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: { xs: -42, md: -32 },
                            left: { xs: -7, sm: -10 },
                            width: { xs: 30, sm: 60 },
                            height: { xs: 60, sm: 140, md: 160 },
                            backgroundImage:
                                'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                            backgroundSize: {
                                xs: '8px 8px',
                                sm: '15px 15px',
                                md: '10px 10px',
                            },
                            zIndex: 1,
                        },
                    }}
                >
                    <img src={Salwator} alt='building' />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: { xs: -10, sm: -20, md: -15 },
                            left: { xs: -10, sm: 20, md: 0 },
                            background:
                                'linear-gradient(19deg, rgba(255, 255, 0, 1) 0%, rgba(9, 9, 9, 1) 0%,' +
                                ' rgba(149, 2, 2, 1) 56%)',
                            color: 'white',
                            px: { xs: 1.5, sm: 2, md: 3 },
                            py: { xs: 1, sm: 1.5, md: 2 },
                            width: { xs: '60%', sm: '35%', md: '40%' },
                            borderRadius: 1,
                            boxShadow: 3,
                            zIndex: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            CIRRUS
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: 14, md: 16 },
                                opacity: 0.9,
                                lineHeight: 1.3,
                            }}
                        >
                            Solidne budownictwo.
                            <br />
                            Terminowa realizacja.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                size={{ xs: 12, md: 7 }}
                sx={{ pt: { xs: 4, md: 0 }, pl: { md: 4 } }}
            >
                <Stack>
                    <Typography
                        color='textSecondary'
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            fontSize: { xs: 16, md: 18 },
                        }}
                    >
                        o firmie
                    </Typography>
                    <Typography
                        color='textPrimary'
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 18, md: 20 },
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: { xs: -10, sm: -10, md: -16 },
                                left: 0,
                                width: 40,
                                height: 2,
                                backgroundColor: 'secondary.main',
                                mr: 1,
                                display: 'inline-block',
                            },
                        }}
                    >
                        Budujemy z pasją.
                        <br />
                        Realizujemy z precyzją.
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textPrimary'
                        sx={{ pt: 4 }}
                    >
                        CIRRUS to firma, która od 1998 roku dostarcza
                        kompleksowe usługi budowlane dla firm oraz instytucji.
                        Nasza specjalność to elewacje, wykończenia oraz budowa i
                        remonty budynków komercyjnych. Każdy projekt realizujemy
                        z dbałością o detale, terminowość i najwyższe standardy
                        jakości.
                    </Typography>
                </Stack>
                <Stack
                    direction='row'
                    spacing={{ xs: 1, sm: 1, md: 2 }}
                    sx={{
                        mt: { xs: 2, sm: 4, md: 6, lg: 8 },
                        mb: { sm: 6, lg: 8 },
                        position: {
                            xs: 'relative',
                            lg: 'static',
                        },
                        right: { xs: '5%', sm: '0%', md: '50%' },
                        top: { xs: 10, md: 32 },
                        width: { md: '130%', lg: '100%' },
                    }}
                >
                    {summaryBoxes.map(({ Icon, label, value }, index) => (
                        <Stack
                            key={index}
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                                border: {
                                    sm: '2px solid rgba(110, 117, 117, 0.15)',
                                },
                                width: 150,
                                height: 150,
                                p: '5px',
                            }}
                        >
                            <Icon
                                sx={{
                                    color: 'secondary.main',
                                    fontSize: {
                                        xs: 20,
                                        sm: 32,
                                        md: 40,
                                    },
                                    mb: 1,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: 10, sm: 14 },
                                    mb: 1,
                                }}
                            >
                                {label}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: { xs: 8, sm: 12 },
                                }}
                            >
                                {value}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
            <Grid size={12} sx={{ mb: 1 }}>
                <PartnersCarousel />
            </Grid>
        </Grid>
    )
}
