import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
  params: {
    exclude: 'current,minutely,hourly,alert',
    appid: process.env.REACT_APP_WEATHER_KEY,
    units: 'metric',
  },
});

export const getWeatherInfoAPI = (lat, lon) =>
  baseAxios.get('', { params: { lat, lon } });
