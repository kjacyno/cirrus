import { Button, capitalize, Stack, Typography } from '@mui/material'

export const GalleryButtons = ({
    setActiveImageGroup,
    activeImageGroup,
}) => {
     const imageGroups = ['wszystkie', 'mieszkaniowe', 'komercyjne', 'remonty']
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{xs: 1,md:6}}
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
    )
}
