import Box from '@mui/material/Box'
import Rakowiecka from '/src/assets/krakow-rakowiecka.jpg'
import { Stack } from '@mui/material'
import { TopRow } from '/src/components/Hero/TopRow/TopRow.jsx'
import {HeroText} from './HeroText/HeroText.jsx'

export const HEADER_HEIGHT_MOBILE = 80
export const HEADER_HEIGHT_DESKTOP = 100
export const Hero = () => {
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
            <TopRow />
          <HeroText/>
        </Stack>
    )
}
