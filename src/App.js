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
import FixedGear from './components/FixedGear';
import About from './components/About';
import Welcome from './components/Welcome';
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
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
