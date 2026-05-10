import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#950202',
        },
        secondary: {
            main: '#EB0010',
        },
        text: {
            primary: '#000000',
            secondary: '#EB0010',
            white: '#ffffff',
            diesel: '#D1E5E1',
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
        textAlign: 'left',
        customSizes: {
            xs: '1rem',
            md: '1.2rem',
            lg: '1.5rem',
            xl: '1.5rem',
        },
    },
    components: {
        MuiStack: {
            defaultProps: {
                useFlexGap: true,
            },
        },
    },
})