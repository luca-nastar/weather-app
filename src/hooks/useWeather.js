import { useEffect, useState } from 'react';
import { getWeatherInfoAPI } from '../api/getWeatherInfo';

const useWeather = (lat, lon) => {
  const [{ isLoading, current, forecast }, setWeatherInfo] = useState({
    isLoading: true,
    current: {},
    forecast: [],
  });

  useEffect(() => {
    getWeatherInfoAPI(lat, lon)
      .then(({ data }) =>
        setWeatherInfo({
          isLoading: false,
          current: data.daily[0],
          forecast: data.daily,
        })
      )
      .catch(console.log);
  }, [lat, lon]);

  return {
    isLoading,
    current,
    forecast,
  };
};

export default useWeather;
