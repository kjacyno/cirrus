import { Grid, IconButton, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SideImageCard } from '/src/components/Projects/helpers/SideImageCard.jsx'
import { GalleryButtons } from '/src/components/Projects/helpers/GalleryButtons.jsx'
import { GalleryLoader } from '/src/components/Projects/helpers/GalleryLoader.jsx'

export const MainImageGallery = ({
    setGalleryOpen,
    activeImageGroup,
    setActiveImageGroup,
    galleryImages,
    loaderOpen,
}) => {
    return (
        <>
            <Grid size={12} sx={{ height: 'fit-content' }}>
                <Stack
                    direction={'row'}
                    sx={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        height: 'fit-content',
                        mb: 3,
                    }}
                >
                    <IconButton onClick={() => setGalleryOpen(false)}>
                        <CloseIcon
                           
                            sx={{
                                fontSize: '2rem',
                                 color:'white'
                            }}
                        />
                    </IconButton>
                </Stack>
                <GalleryButtons
                    setActiveImageGroup={setActiveImageGroup}
                    activeImageGroup={activeImageGroup}
                />
            </Grid>
            <Grid
                container
                spacing={4}
                sx={{
                    position: 'relative',
                    minHeight: 600,
                    mt: 2,
                }}
            >
                <GalleryLoader loaderOpen={loaderOpen} />

                {galleryImages.map((item, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, sm: 6, md: 3 }}
                        sx={{
                            height: 300,
                            transition: 'opacity 0.3s ease-in-out',
                            opacity: loaderOpen ? 0 : 1,
                            visibility: loaderOpen ? 'hidden' : 'visible',
                        }}
                    >
                        <SideImageCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
