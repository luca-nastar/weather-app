import React from 'react';
import { Grid } from '@mui/material';

import ForecastDay from './ForecastDay';

const Forecast = ({ forecastData }) => {
  return (
    <Grid container rowSpacing={2} sx={{ mb: 1, justifyContent: 'center' }}>
      {forecastData.map(({ dt, temp }, idx) => {
        if (idx === 0 || idx > 5) {
          return null;
        }
        return (
          <ForecastDay
            key={idx}
            dt={dt}
            maxTemp={Math.trunc(temp.max)}
            minTemp={Math.trunc(temp.min)}
          />
        );
      })}
    </Grid>
  );
};

export default Forecast;
