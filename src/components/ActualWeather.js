import React from 'react';
import { Grid, Typography } from '@mui/material';

const ActualWeather = ({ temp, maxTemp, minTemp }) => {
  return (
    <Grid item textAlign="center" sx={{ mb: 4 }}>
      <Typography variant="h7">Hoy</Typography>
      <Typography variant="h2" fontWeight="bold">
        {temp}º
      </Typography>
      <Typography display="inline" fontSize={14}>
        Max: {`${maxTemp}º | `}
      </Typography>
      <Typography display="inline" fontSize={14}>
        Min: {minTemp}º
      </Typography>
    </Grid>
  );
};

export default ActualWeather;
