import React from 'react';
import { Box, Typography, Container, Divider, Button } from '@mui/material';


const Tools = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default', // Background color from theme
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: '25px',
      }}
    >
      <Container
        sx={{
          backgroundColor: (theme) => theme.palette.grey[900],
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 800,
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Other Tools
        </Typography>
        <Divider sx={{marginBottom: 2}}></Divider>
        <Typography variant='h5'>Frustrafix</Typography>
        <Typography sx={{marginTop:2, marginBottom:2}}>
            Gemaakt door mezelf.<br></br>
            Voegt knoppen toe aan je planning voor spot/ants. Voegt ook wat knoppen toe binnen in je taak<br></br>
            <br></br>
            <strong>NIEUW!:</strong> Voegt ook de kopieer-functionaliteit van Antscopy toe. Grafieken nog niet voor gekeken.
        </Typography>
        <Button variant="contained" href="https://chromewebstore.google.com/detail/frustrafix/obefljbiiicgmfajdhnpaklocbnlnkaf?authuser=0&hl=nl" target='_blank'>Chrome Webstore</Button>
      </Container>
    </Box>
  );
};

export default Tools;
