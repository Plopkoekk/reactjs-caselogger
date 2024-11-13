import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Cfn = () => {
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
          Corporate Fibernet
        </Typography>
        <Typography>
          This is the Corporate Fibernet page. You can add more content and functionality here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Cfn;
