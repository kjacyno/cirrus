import BasicTabs from "./TabPanel";
import "./App.scss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./Header";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#950202'
        },
        secondary: {
            main: '#EB0010'
        },
        text: {
            primary: '#000000',
            secondary: '#000000'
        }
    },
    typography: {
        fontSize: 16
    }
});

function App() {
    return (
        <Container sx={{
            paddingTop: '1rem', maxWidth: '100vw',
        }}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Box
                    sx={{
                        backgroundColor: "white",
                        height: "auto",
                        width: "100%",
                    }}
                >
                    <BasicTabs/>
                </Box>
            </ThemeProvider>
        </Container>
    );
}
export default App;