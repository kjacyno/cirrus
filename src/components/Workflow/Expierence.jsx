import { Grid, Stack, Typography} from '@mui/material'
import Construction from '/src/assets/mikolow-salwator5.jpg'
import Box from '@mui/material/Box'

export const Experience = () => {
     const expItems = [
         {
             label: '100+',
             value: 'zrealizowanych projektów',
         },
         {
             label: '15+',
             value: 'lat doświadczenia na rynku ',
         },
         {
             label: '100%',
             value: 'zadowolonych klientów',
         },
     ]
    return (
        <Grid
            container
            spacing={2}
            sx={{
                py: 5,
                px: 5,
                width: '100%',
                minHeight: 100,
                position: 'relative',
                alignItems: 'center',
            }}
        >
            <Box
                component='img'
                src={Construction}
                alt='construction'
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%',
                    objectPosition: '50% 36%',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(90deg, rgba(0, 0, 0, 0.96) 4%, rgba(0, 0, 0, 0.93) 31%, rgba(0, 0, 0, 0.8) 44%, rgba(0, 0, 0, 0.67) 51%, rgba(108, 0, 0, 0.55) 61%, rgba(0, 0, 0, 0.67) 68%, rgba(0, 0, 0, 0.8) 74%, rgba(0, 0, 0, 0.97) 96%)',
                }}
            />
            {expItems.map((item, index) => (
                <Grid
                    size={{ sx: 12, md: 4 }}
                    spacing={1}
                    key={index}
                    sx={{
                        zIndex: 200,
                        position: 'relative',
                         textAlign: 'center',
                         display: 'flex',
                         justifyContent: 'center',
                    }}
                >
                    <Stack
                        sx={{
                            width: '55%',
                        }}
                    >
                        <Typography
                            variant={'h3'}
                            color={'textSecondary'}
                            sx={{ fontWeight: 700 }}
                        >
                            {item.label}
                        </Typography>
                        <Typography
                            color={'textWhite'}
                            variant={'h6'}
                            sx={{ fontWeight: 500, textTransform: 'uppercase' }}
                        >
                            {item.value}
                        </Typography>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}
