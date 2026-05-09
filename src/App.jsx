// import "./App.scss";
import { ThemeProvider } from '@mui/material/styles'
import { Hero } from '/src/components/Hero/Hero.jsx'
import { theme } from './theme/theme.js'
import { About } from '/src/components/About/About.jsx'
import {Projects} from "/src/components/Projects/Projects.jsx";
import {Workflow} from "./components/Workflow/Workflow.jsx";
import {Experience} from "/src/components/Workflow/Expierence.jsx";

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
          <Projects />
          <Workflow />
          <Experience />

          {/*</Box>*/}
      </ThemeProvider>
  )
}
export default App
