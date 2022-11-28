import React, {
  // useState,
} from 'react'
import {
  ThemeProvider,
  // createTheme,
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

function App() {

  const theme = useTheme();

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
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
