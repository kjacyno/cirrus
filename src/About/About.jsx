import Salwator from '/src/assets/mikolow-salwator.jpg'
import { Grid, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export const About = () => {
    return (
        <Grid
            container
            spacing={1}
            sx={{
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4 },
                height: '40vh',
            }}
        >
            <Grid size={5} sx={{ minHeight: '65vh' }}>
                <Stack>
                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        '&::after': {*/}
                    {/*            content: '""',*/}
                    {/*            position: 'absolute',*/}
                    {/*            bottom: -52,*/}
                    {/*            left: -48,*/}
                    {/*            width: '14rem',*/}
                    {/*            height: '8rem',*/}
                    {/*            background:*/}
                    {/*                'linear-gradient(19deg, rgba(255, 255, 0, 1) 0%, rgba(9, 9, 9, 1) 0%,' +*/}
                    {/*                ' rgba(149, 2, 2, 1) 56%)',*/}
                    {/*            borderRadius: '3%',*/}
                    {/*            mr: 1,*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*>*/}
                        <Box
                            component={'img'}
                            src={Salwator}
                            sx={{
                                minWidth: { xs: '100%', md: '50%' },
                                maxWidth: '60%',
                                objectFit: 'cover',
                            }}
                        />
                    {/*</Box>*/}
                </Stack>
            </Grid>
            <Grid size={7}>
                <Typography variant='body1'>lalal</Typography>
            </Grid>
        </Grid>
    )
}
