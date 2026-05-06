import { Button, capitalize, Grid, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { imageList } from './helpers/imageList.js'
import { CenterImageCard } from './helpers/CenterImageCard.jsx'
import { SideImageCard } from './helpers/SideImageCard.jsx'

export const Projects = () => {
    const [activeImageGroup, setActiveImageGroup] = useState('wszystkie')
    const imageGroups = ['wszystkie', 'mieszkaniowe', 'komercyjne', 'remonty']
    const filtered = imageList
        .filter((image) => image.groups.includes(activeImageGroup))
        .slice(0, 4)
    const imagesChunk = [filtered]
    return (
        <Grid
            id='realizacje'
            container
            spacing={2}
            sx={{
                width: '100%',
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4, md: 4 },
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.93)',
                minHeight: 600,
            }}
        >
            <Grid size={12}>
                <Typography
                    color={'textSecondary'}
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 18 },
                    }}
                >
                    Realizacje
                </Typography>
            </Grid>
            <Grid size={{ sm: 12, lg: 6 }}>
                <Typography
                    variant={'h4'}
                    color={'textWhite'}
                    sx={{ fontWeight: 700 }}
                >
                    Nasze projekty
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, lg: 6 }}>
                <Stack
                    direction={{ sx: 'column', sm: 'row' }}
                    spacing={6}
                    sx={{
                        justifyContent: { xs: 'flex-start', lg: 'flex-end' },
                    }}
                >
                    {imageGroups.map((group, index) => (
                        <Button
                            key={index}
                            variant={'contained'}
                            onClick={() => setActiveImageGroup(group)}
                            sx={{
                                backgroundColor:
                                    activeImageGroup === group
                                        ? 'primary.main'
                                        : 'transparent',
                                boxShadow: 'none',
                            }}
                        >
                            <Typography
                                color={'textWhite'}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: 14, md: 16 },
                                    textTransform: 'none',
                                }}
                            >
                                {capitalize(group)}
                            </Typography>
                        </Button>
                    ))}
                </Stack>
            </Grid>
            {imagesChunk.map((item, index) => (
                <Stack
                    direction={'row'}
                    key={index}
                    spacing={4}
                    sx={{ height: 400, width: '100%' }}
                >
                    {item[0] && <SideImageCard item={item[0]} />}
                    <Stack
                        spacing={2}
                        sx={{ width: '40%', justifyContent: 'space-between' }}
                    >
                        {item[1] && <CenterImageCard item={item[1]} />}
                        {item[2] && <CenterImageCard item={item[2]} />}
                    </Stack>
                    {item[3] && <SideImageCard item={item[3]} />}
                </Stack>
            ))}
        </Grid>
    )
}
