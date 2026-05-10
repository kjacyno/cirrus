import { Grid, Stack, Typography } from '@mui/material'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined'
import Box from '@mui/material/Box'

export const Workflow = () => {
    const workflowSteps = [
        {
            Icon: DesignServicesOutlinedIcon,
            step: '01',
            label: 'Planowanie',
            value: 'Analizujemy potrzeby i przygotowujemy ofertę',
        },
        {
            Icon: ConstructionOutlinedIcon,
            step: '02',
            label: 'Budowa',
            value: 'Realizujemy prace budowlane zgodnie z planem',
        },
        {
            Icon: FactCheckOutlinedIcon,
            step: '03',
            label: 'Nadzór',
            value: 'Kontrolujemy jakość na każdym etapie',
        },
        {
            Icon: RealEstateAgentOutlinedIcon,
            step: '04',
            label: 'Odbiór',
            value: 'Przekazujemy gotowy obiekt i zapewniamy wsparcie',
        },
    ]
    return (
        <Grid
            id={'workflow'}
            container
            sx={{
                width: '100%',
                px: {
                    xs: 3,
                    sm: 4,
                },
                py: { xs: 2, sm: 4, md: 4 },
                position: 'relative',
            }}
        >
            <Grid size={{ xs: 12, md: 3 }}>
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
                        variant={'h4'}
                        color={'textPrimary'}
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Jak pracujemy?
                    </Typography>
                </Stack>
            </Grid>
            {workflowSteps.map(({ Icon, step, label, value }, index) => (
                <Grid size={{ xs: 12, md: 2.25 }} key={index}>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        sx={{ alignItems: 'center' }}
                    >
                        <Icon
                            sx={{
                                fontSize: {
                                    xs: 40,
                                    sm: 48,
                                    md: 84,
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
                                            width: index === 0 ? 105 : 125,
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
                                                    ? 'calc(100% + 95px)'
                                                    : 'calc(100% + 115px)',
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
