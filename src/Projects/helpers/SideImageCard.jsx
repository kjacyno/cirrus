import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const SideImageCard = ({ item }) => {
    return (
        <Box sx={{ height: '100%', position: 'relative' }}>
            <Box
                component='img'
                src={item.img}
                alt={item.title}
                sx={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%',
                    objectPosition: '50% 50%',
                }}
            />
            <ImageListItemBar
                title={item.title}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                    >
                        <ArrowForwardIcon sx={{fontSize: 24}} />
                    </IconButton>
                }
                onClick={() => console.log(item)}
                sx={{ cursor: 'pointer' }}
            />
        </Box>
    )
}
