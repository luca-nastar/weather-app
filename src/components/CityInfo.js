import React from 'react';
import { Grid, Icon, IconButton, Typography } from '@mui/material';
import { Clear, GpsFixed } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removeCity } from '../redux/slices/citiesSlice';

const CityInfo = ({ idx, city, countryCode }) => {
  const dispatch = useDispatch();

  return (
    <Grid container item sx={{ justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h6" display="inline">
        {idx === 0 && <Icon fontSize="small" component={GpsFixed} />}
        {` ${city}, ${countryCode}`}
      </Typography>

      {idx !== 0 && (
        <IconButton size="small" onClick={() => dispatch(removeCity({ city }))}>
          <Clear />
        </IconButton>
      )}
    </Grid>
  );
};

export default CityInfo;
