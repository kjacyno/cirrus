import {Backdrop, CircularProgress} from "@mui/material";

export const GalleryLoader = ({ loaderOpen }) => {
    return (
        <Backdrop
            sx={(theme) => ({
                color: '#fff',
                backgroundColor: '#121212',
                zIndex: theme.zIndex.drawer + 1,
                position: 'absolute',
                top: -1,
                left: -1,
                bottom: -1,
                right: -1,
                // Fix: Pin the spinner to the top area instead of the center
                display: 'flex',
                alignItems: 'flex-start',
                pt: '150px',
            })}
            open={loaderOpen}
        >
            <CircularProgress color='inherit' />
        </Backdrop>
    )
}