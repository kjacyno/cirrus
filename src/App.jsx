import BasicTabs from "./TabPanel";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
      primary: {
        main: '#950202'
    },
    secondary:{
      main: '#EB0010'
    },
text:{
  primary: '#000000',
  secondary: '#000000'
}
  },
  typography:{
    fontSize: 16
  }
});

function App() {
  return (
    <Container maxWidth="xl" sx={{paddingTop: '1rem'}}>
      <ThemeProvider theme={theme}>
    
        <Header />
        <Box
          sx={{
            bgcolor: "white",
            height: "auto",
            width: "100%",
          }}
        >
          <BasicTabs />
        </Box>
      </ThemeProvider>
    </Container>
  );
}

export default App;
