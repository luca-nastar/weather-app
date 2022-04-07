import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct",
  params: {
    limit: 1,
    appid: process.env.REACT_APP_WEATHER_KEY,
  },
});

export const getCoordinatesAPI = (city) =>
  baseAxios.get("", { params: { q: city } });
