import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#950202'
        },
        secondary: {
            main: '#EB0010'
        },
        text: {
            primary: '#000000',
            secondary: '#EB0010',
            white: '#ffffff',
        },
    },
    customVariables: {
        logoWidth: {
            xs: '6rem',
            sm: '8rem',
            md: '10rem',
            lg: '13rem'
        },
        fontSize: {
            xs: '0.8rem',
            sm: '1rem',
            md: '1.2rem',
            lg: '1.5rem',
            xl: '1.5rem'
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
        textAlign: 'left',
        h1: {
            fontWeight: 700,
            fontSize: 35,
            textTransform: 'uppercase'
        },
        body1: {fontWeight: 500},
        body2: {fontWeight: 400,  fontSize: 14},
    },
    components: {
        MuiStack: {
            defaultProps: {
                useFlexGap: true,
            },
        },
    },
});