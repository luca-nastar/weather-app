import { Divider, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import React from 'react';

const ForecastDay = ({ dt, maxTemp, minTemp }) => {
  const day = dayjs(dt * 1000)
    .locale('es')
    .format('dddd');

  return (
    <Grid item xs={4} textAlign="center">
      <Typography>{day.slice(0, 3)}</Typography>
      <Divider />
      <Typography fontSize={14}>Max: {maxTemp}º</Typography>
      <Typography fontSize={14}>Min: {minTemp}º</Typography>
    </Grid>
  );
};

export default ForecastDay;
