import React from 'react';
import { Paper, Typography } from '@mui/material';
import CardContent from '../components/CardContent';

const CityPage = () => {
  return (
    <Paper elevation={7} sx={{ m: 2, p: 2 }}>
      <Typography variant="h5" sx={{ pb: 3 }}>
        Lista de ciudades:
      </Typography>

      <CardContent />
    </Paper>
  );
};

export default CityPage;
