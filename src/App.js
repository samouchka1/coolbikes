import React, {
  // useState,
} from 'react'
import {
  createTheme,
  ThemeProvider,
  // useTheme,
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

function App() {

  // const theme = useTheme();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3c3c7f64'
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
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
    </div>
  );
}

export default App;
