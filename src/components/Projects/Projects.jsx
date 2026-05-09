import { Button, Grid, Modal, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { CenterImageCard } from './helpers/CenterImageCard.jsx'
import { SideImageCard } from './helpers/SideImageCard.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { MainImageGallery } from './ImageGallery/MainImageGallery.jsx'
import { GalleryButtons } from '/src/components/Projects/helpers/GalleryButtons.jsx'
import { GalleryLoader } from '/src/components/Projects/helpers/GalleryLoader.jsx'
import { getImageList } from '/src/components/Projects/helpers/getImageList.js'

export const Projects = () => {
    const [activeImageGroup, setActiveImageGroup] = useState('wszystkie')
    const [loaderOpen, setLoaderOpen] = useState(false)
    const [galleryOpen, setGalleryOpen] = useState(false)
    const [allImages, setAllImages] = useState([])
    const [previewImages, setPreviewImages] = useState([])
    const [galleryImages, setGalleryImages] = useState([])

    useEffect(() => {
        const loadInitialData = async () => {
            setLoaderOpen(true)

            const data = await getImageList()
            setAllImages(data)
        }
        loadInitialData()
    }, [])

    useEffect(() => {
        const getFilteredList = async () => {
            setLoaderOpen(true)

            if (allImages.length === 0) return

            const filtered = allImages.filter((image) =>
                activeImageGroup === 'wszystkie'
                    ? true
                    : image.groups.includes(activeImageGroup)
            )
            setPreviewImages([filtered.slice(0, 4)]) // Always chunked
            setGalleryImages(filtered)

            await new Promise((resolve) => setTimeout(resolve, 1000))
            setLoaderOpen(false)
        }
        getFilteredList()
    }, [activeImageGroup, galleryOpen, allImages])

    return (
        <Grid
            id='projects'
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
                <GalleryButtons
                    setActiveImageGroup={setActiveImageGroup}
                    activeImageGroup={activeImageGroup}
                />
            </Grid>
            <Grid
                size={12}
                spacing={2}
                sx={{
                    position: 'relative',
                    minHeight: 400,
                }}
            >
                <GalleryLoader loaderOpen={loaderOpen} />
                {previewImages.map((item, index) => (
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        key={index}
                        spacing={4}
                        sx={{
                            height: { xs: 'auto', md: 400 },
                            width: '100%',
                            transition: 'opacity 0.3s ease-in-out',
                            opacity: loaderOpen ? 0 : 1,
                            visibility: loaderOpen ? 'hidden' : 'visible',
                        }}
                    >
                        {item[0] && <SideImageCard item={item[0]} />}
                        <Stack
                            spacing={4}
                            sx={{
                                width: { xs: '100%', md: '40%' },
                                justifyContent: 'space-between',
                            }}
                        >
                            {item[1] && <CenterImageCard item={item[1]} />}
                            {item[2] && <CenterImageCard item={item[2]} />}
                        </Stack>
                        {item[3] && <SideImageCard item={item[3]} />}
                    </Stack>
                ))}
            </Grid>
            <Stack
                direction={'row'}
                sx={{ width: '100%', justifyContent: 'center', mt: 2 }}
            >
                <Button
                    variant={'outlined'}
                    onClick={() => {
                        setGalleryOpen(true)
                    }}
                    sx={{ borderColor: 'white' }}
                >
                    <Typography
                        color={'textWhite'}
                        variant={'subtitle1'}
                        sx={{ textTransform: 'uppercase', mr: 2 }}
                    >
                        zobacz wszystkie realizacje
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 24, color: 'white' }} />
                </Button>
            </Stack>
            <Modal
                sx={(theme) => ({
                    color: '#fff',
                    backgroundColor: '#121212',
                    zIndex: theme.zIndex.drawer + 1,
                    '& .MuiBackdrop-root': {
                        backgroundColor: '#121212',
                    },
                })}
                aria-labelledby='modal-modal-gallery'
                aria-describedby='modal-modal-projects-gallery'
                open={galleryOpen}
                onClose={() => {
                    setLoaderOpen(true)
                    setGalleryOpen(false)
                }}
            >
                <Grid
                    container
                    sx={{
                        width: '100%',
                        maxHeight: '100vh',
                        px: {
                            xs: 3,
                            sm: 4,
                        },
                        py: { xs: 2, sm: 4, md: 4 },
                        overflowY: 'auto',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: '#121212',
                    }}
                    spacing={4}
                >
                    <MainImageGallery
                        setGalleryOpen={setGalleryOpen}
                        activeImageGroup={activeImageGroup}
                        setActiveImageGroup={setActiveImageGroup}
                        galleryImages={galleryImages}
                        loaderOpen={loaderOpen}
                    />
                </Grid>
            </Modal>
        </Grid>
    )
}
