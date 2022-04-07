import React from 'react';
import {
  AppBar,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';

import CityPage from './pages/CityPage';
import Appbar from './components/Appbar';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Appbar />
      <CityPage />
    </ThemeProvider>
  );
};

export default App;
