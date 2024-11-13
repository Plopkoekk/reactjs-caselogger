import React from 'react';
import { Box, Typography, Container, Divider, Button, useFormControl, TextField } from '@mui/material';
import InhomeTaskInfo from '../../components/form/inhomeTaskInfo';

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
          TEST-PAGE
        </Typography>
        <Divider sx={{marginBottom: 2}}></Divider>
        <InhomeTaskInfo />

      </Container>
    </Box>
  );
};

export default Repair;
