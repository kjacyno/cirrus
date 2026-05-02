// import "./App.scss";
import { ThemeProvider } from '@mui/material/styles'
import { Hero } from './Hero/Hero.jsx'
import { theme } from './theme/theme.js'
import { About } from './About/About.jsx'

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
      <Hero />
      <About />
      {/*</Box>*/}
    </ThemeProvider>
  )
}
export default App
