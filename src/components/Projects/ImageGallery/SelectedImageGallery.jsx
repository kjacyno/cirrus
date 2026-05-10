import { IconButton, Modal, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export const SelectedImageGallery = ({ imageGallery, open, handleClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + 1 === imageGallery.length ? 0 : prev + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? imageGallery.length - 1 : prev - 1
        )
    }

    if (!imageGallery || imageGallery.length === 0) return null
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    bgcolor: 'rgba(18, 18, 18, 0.98)',
                    p: { xs: 2, md: 4 },
                }}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        color: 'white',
                        zIndex: 10,
                    }}
                >
                    <CloseIcon
                        sx={{
                            fontSize: '2rem',
                        }}
                    />
                </IconButton>

                <Stack
                    direction='row'
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 24,
                    }}
                >  {imageGallery.length >1 &&
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            color: 'white',
                            position: 'absolute',
                            left: 0,
                            bgcolor: 'rgba(18, 18, 18, 0.5)',
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>}

                    <Box
                        component='img'
                        src={imageGallery[currentIndex]}
                        sx={{
                            maxHeight: '100%',
                            width: 'auto',
                            objectFit: 'contain',
                            boxShadow: 3,
                            borderRadius: 1,
                        }}
                    />
                     {imageGallery.length >1 &&
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            color: 'white',
                            position: 'absolute',
                            right: 0,
                            bgcolor: 'rgba(18, 18, 18, 0.5)',
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>}
                </Stack>

                <Stack
                    direction='row'
                    spacing={1}
                    sx={{
                        py: 2,
                        overflowX: 'auto',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&::-webkit-scrollbar': { height: '4px' },
                        '&::-webkit-scrollbar-thumb': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                            borderRadius: '10px',
                        },
                        bgcolor: 'rgba(18, 18, 18, 0.95)',
                        position: 'absolute',
                        bottom: 0,
                    }}
                >
                    {imageGallery.map((url, index) => (
                        <Box
                            key={index}
                            component='img'
                            src={url}
                            onClick={() => setCurrentIndex(index)}
                            sx={{
                                width: 150,
                                height: 80,
                                objectFit: 'cover',
                                cursor: 'pointer',
                                borderRadius: 1,
                                opacity: currentIndex === index ? 1 : 0.5,
                                transition: 'all 0.2s',
                                '&:hover': { opacity: 1 },
                            }}
                        />
                    ))}
                </Stack>
            </Box>
        </Modal>
    )
}
