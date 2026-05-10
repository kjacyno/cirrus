import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {SelectedImageGallery} from "/src/components/Projects/ImageGallery/SelectedImageGallery.jsx";
import {useState} from "react";
export const CenterImageCard = ({ item }) => {
     const [open, setOpen] = useState(false)
     const handleClose = () => setOpen(false)
    return (
        <>
            <Box sx={{ height: { md: '45%' }, position: 'relative' }}>
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
                            <ArrowForwardIcon sx={{ fontSize: 24 }} />
                        </IconButton>
                    }
                    onClick={() => setOpen(true)}
                    sx={{ cursor: 'pointer' }}
                />
            </Box>
            {open && (
                <SelectedImageGallery
                    imageGallery={item.gallery}
                    handleClose={handleClose}
                    open={open}
                />
            )}
        </>
    )
}
