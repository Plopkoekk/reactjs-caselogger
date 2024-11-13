// src/pages/Home.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default', // Background color from theme
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',  // Align content to the top
        alignItems: 'flex-start',      // Align content to the top
        paddingTop: '25px',            // Adds padding to start content below the navbar
      }}
    >
      <Container
        sx={{
          backgroundColor: (theme) => theme.palette.grey[900],
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 800, // Adjust the max-width if necessary
          width: '100%', // Ensure the container takes up full width
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Caselogger!
        </Typography>
        <Typography>
          This is a placeholder homepage. More features will be added soon.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
