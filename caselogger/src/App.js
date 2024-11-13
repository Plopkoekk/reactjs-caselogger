// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Install from './pages/inhome/Install'; // Import the Install page
import Repair from './pages/inhome/repair'; // Import Repair page
import Cfn from './pages/b2b/cfn';
import Psvka from './pages/b2b/psvka';
import Gsx from './pages/b2b/projects/gsx';
import Unhappy from './pages/inhome/projects/unhappy';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode theme
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container
          sx={{
            marginTop: '25px', // Adds 25px margin below the navbar
            paddingBottom: 4,  // Adds padding to the bottom of the container
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inhome/install" element={<Install />} /> {/* Route for Install */}
            <Route path="/inhome/repair" element={<Repair />} /> {/* Route for Repair */}
            <Route path="/b2b/cfn" element={<Cfn />} />
            <Route path="/b2b/psvka" element={<Psvka />} />
            <Route path="/b2b/projects/gsx" element={<Gsx />} />
            <Route path="/inhome/projects/unhappy" element={<Unhappy />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
