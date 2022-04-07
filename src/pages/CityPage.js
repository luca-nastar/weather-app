import React from 'react';
import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';

import CityCard from '../components/CityCard';
import AddCity from '../components/AddCity';
import useCities from '../hooks/useCities';

const CityPage = () => {
  const { cities, isLoading } = useCities();

  return (
    <Paper elevation={7} sx={{ m: 2, p: 2 }}>
      <Typography variant="h5" sx={{ pb: 3 }}>
        Lista de ciudades:
      </Typography>
      {isLoading ? (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress sx={{ m: 'auto' }} size={75} />
        </Box>
      ) : (
        <>
          <Grid container justifyContent="space-evenly">
            {cities.map((cityInfo, idx) => (
              <CityCard key={idx} idx={idx} cityInfo={cityInfo} />
            ))}
            <AddCity />
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default CityPage;
