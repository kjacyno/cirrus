// import "./App.scss";
import {ThemeProvider} from "@mui/material/styles";
import {Hero} from "./Hero/Hero.jsx";
import {theme} from "./theme/theme.js";


function App() {
    return (
            <ThemeProvider theme={theme}>
                {/*<Header/>*/}
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        backgroundColor: "white",*/}
                {/*        height: "auto",*/}
                {/*    }}*/}
                {/*>*/}
                    {/*<BasicTabs/>*/}
                    <Hero/>
                {/*</Box>*/}
            </ThemeProvider>
    );
}
export default App;