import React from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';

import useCities from '../hooks/useCities';
import AddCity from './AddCity';
import CityCard from './CityCard';

const CardContent = () => {
  const { cities, isLoading } = useCities();

  return (
    <>
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
    </>
  );
};

export default CardContent;
