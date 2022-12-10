import React, {
  useState,
} from 'react'
import {
  ThemeProvider,
  // useTheme,
  createTheme,
} from '@mui/material/styles';
import {
  Box
} from '@mui/material';
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
// import useMediaQuery from '@mui/material/useMediaQuery'; //test

const ColorModeContext = React.createContext({
   toggleColorMode: () => {} 
});


const App = () => {

  // const theme = useTheme();

  //test
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const [mode, setMode] = React.useState();

  // React.useEffect(() => {
  //   setMode(prefersDarkMode ? 'dark' : 'light');
  // }, [prefersDarkMode]);



  const [mode, setMode] = useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: {
                main: '#2b3bd0c1',
              }
            }
          : {
              // palette values for dark mode
              primary: {
                main: '#071041dc',
              }
            })
        },
      }),
    [mode],
  );

  //Body background color on DarkMode
  mode === 'light' ? document.body.style.backgroundColor = '#fff' : document.body.style.backgroundColor = '#000';

  const DarkMode = () => {
    return (
      <Tooltip title="set Dark / Light mode">
        <IconButton 
          onClick={colorMode.toggleColorMode} 
          color="text.primary"
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <Box className="App">
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Router>
              <Navbar DarkMode={DarkMode} mode={mode} />
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/fixedgear" element={<FixedGear mode={mode} />} />
                <Route path="/gravel" element={<Gravel mode={mode} />} />
                <Route path="/road" element={<Road mode={mode} />} />
                <Route path="/about" element={<About mode={mode} />} />
              </Routes>
              <CardSlider />
              <Footer mode={mode}/>
            </Router>
          </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
}

export default App;
