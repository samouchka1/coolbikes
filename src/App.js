import React, {
  // useState,
} from 'react'
import {
  // createTheme,
  ThemeProvider,
  useTheme,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import FixedGear from './components/FixedGear';
import Gravel from './components/Gravel';
import Road from './components/Road';
import About from './components/About';
import Footer from './components/Footer';
import CardSlider from './components/CardSlider';

import { IconButton, Tooltip } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const ColorModeContext = React.createContext({
   toggleColorMode: () => {} 
});


function App() {

  const colorMode = React.useContext(ColorModeContext);

  const theme = useTheme();

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#493f819a'
  //     }
  //   }
  // })

  // const getDesignTokens = (mode) => ({
  //   palette: {
  //     mode,
  //     primary: {
  //       ...(mode === 'dark' && {
  //         main: '#2a2449a5',
  //       }),
  //     },
  //     },
  //   });

  // const darkModeTheme = createTheme(getDesignTokens('dark'));

  const DarkMode = () => {
    return (
      <Tooltip title="set Dark / Light mode">
        <IconButton 
          onClick={colorMode.toggleColorMode} 
          // color="text.primary"
          color="#000"
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
    )
  }



  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar
              DarkMode={DarkMode}
            />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/fixedgear" element={<FixedGear />} />
              <Route path="/gravel" element={<Gravel />} />
              <Route path="/road" element={<Road />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <CardSlider />
            <Footer />
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
