import { Grid, Stack, Typography } from '@mui/material'

import Box from '@mui/material/Box'
import {workflowSteps} from '/src/components/utils/iconArrays.js'

export const Workflow = () => {
   
    return (
        <Grid
            id={'workflow'}
            container
            spacing={2}
            sx={{
                width: '100%',
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4 },
                position: 'relative',
            }}
        >
            <Grid size={{ xs: 12,sm:12, md: 12 }}>
                <Stack spacing={2}>
                    <Typography
                        color={'textSecondary'}
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            fontSize: { xs: 16, md: 18 },
                        }}
                    >
                        Nasz proces
                    </Typography>

                    <Typography
                        color={'textPrimary'}
                        sx={{ fontSize: 32, fontWeight: 700, mb: 2 }}
                    >
                        Jak pracujemy?
                    </Typography>
                </Stack>
            </Grid>
            {workflowSteps.map(({ Icon, step, label, value }, index) => (
                <Grid size={{ xs: 12, md: 3 }} key={index}>
                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{ alignItems: 'center' }}
                    >
                        <Icon
                            sx={{
                                fontSize: {
                                    xs: 40,
                                    sm: 40,
                                    md: 55,
                                },
                            }}
                        />
                        <Stack
                            spacing={0}
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography
                                color={'textSecondary'}
                                sx={{
                                    fontSize: {
                                        xs: 16,
                                        sm: 24,
                                        md: 32,
                                    },
                                    fontWeight: 700,
                                }}
                            >
                                {step}
                            </Typography>
                            <Box
                                sx={{
                                    position: 'relative',
                                    ...(index !== workflowSteps.length - 1 && {
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            // line
                                            width:
                                                index === 0
                                                    ? { xs: 105, md: 50 }
                                                    : { xs: 125, md: 70 },
                                            height: '3px',
                                            top: '50%',
                                            left: '100% ',
                                            transform: 'translateY(-50%)',
                                            background:
                                                'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 100%)',
                                        },

                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            // arrow head
                                            width: 10,
                                            height: 10,
                                            top: '50%',
                                            left:
                                                index === 0
                                                    ? {
                                                          xs: 'calc(100% + 95px)',
                                                          md: 'calc(100% + 40px)',
                                                      }
                                                    : {
                                                          xs: 'calc(100% + 115px)',
                                                          md: 'calc(100% + 60px)',
                                                      },
                                            transform:
                                                'translateY(-50%) rotate(45deg)',
                                            borderTop:
                                                '3px solid rgb(200,200,200)',
                                            borderRight:
                                                '3px solid rgb(200,200,200)',
                                        },
                                    }),
                                }}
                            >
                                <Typography
                                    variant={'subtitle1'}
                                    sx={{
                                        fontWeight: 600,
                                    }}
                                >
                                    {label}
                                </Typography>
                            </Box>
                            <Typography
                                variant={'subtitle2'}
                                sx={{ fontWeight: 400 }}
                            >
                                {value}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}
