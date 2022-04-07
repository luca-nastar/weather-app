import React from 'react';
import { Card, CircularProgress } from '@mui/material';

import ActualWeather from './ActualWeather';
import CityInfo from './CityInfo';
import Forecast from './Forecast';
import useWeather from '../hooks/useWeather';

const CityCard = ({ idx, cityInfo }) => {
  const { city, countryCode, lat, lon } = cityInfo;

  const { isLoading, current, forecast } = useWeather(lat, lon);

  return (
    <Card
      sx={{
        width: 250,
        minHeight: 350,
        p: 1,
        m: 1,
        textAlign: 'center',
      }}
    >
      <CityInfo idx={idx} city={city} countryCode={countryCode} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ActualWeather
            temp={Math.trunc(current.temp.day)}
            maxTemp={Math.trunc(current.temp.max)}
            minTemp={Math.trunc(current.temp.min)}
          />
          <Forecast forecastData={forecast} />
        </>
      )}
    </Card>
  );
};

export default CityCard;
