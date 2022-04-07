import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Appbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5">Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Appbar;
