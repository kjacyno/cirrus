import { Grid, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SideImageCard } from '/src/Projects/helpers/SideImageCard.jsx'
import { GalleryButtons } from '/src/Projects/helpers/GalleryButtons.jsx'
import { GalleryLoader } from '/src/Projects/helpers/GalleryLoader.jsx'

export const ImageGallery = ({
    setGalleryOpen,
    activeImageGroup,
    setActiveImageGroup,
    imagesChunk,
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
                    <CloseIcon
                        color={'white'}
                        onClick={() => setGalleryOpen(false)}
                        sx={{
                            cursor: 'pointer',
                            fontSize: '2rem',
                        }}
                    />
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
                    minHeight: '500px', // Stable height for the spinner to live in
                    mt: 2,
                    // opacity: loaderOpen ? 0 : 1,
                    // transition: 'opacity 0.3s ease-in-out',
                }}
            >
                <GalleryLoader loaderOpen={loaderOpen} />
                {imagesChunk.map((item, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, sm: 6, md: 3 }}
                        sx={{ height: 300 }}
                    >
                        <SideImageCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
