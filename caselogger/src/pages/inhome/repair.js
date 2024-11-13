import React from 'react';
import { Box, Typography, Container, Divider, Button, useFormControl, TextField } from '@mui/material';

const Repair = () => {
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
          Repair
        </Typography>
        <Divider sx={{marginBottom: 2}}></Divider>


      </Container>
    </Box>
  );
};

export default Repair;
