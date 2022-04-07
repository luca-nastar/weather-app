import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity(state, action) {
      const city = state.findIndex(({ city }) => city === action.payload.city);

      if (city >= 0) {
        return state;
      }
      state.push(action.payload);
    },
    removeCity(state, action) {
      const cityIndex = state.findIndex(
        ({ city }) => city === action.payload.city
      );
      state.splice(cityIndex, 1);
    },
  },
});

export const getIpLocation = () => (dispatch) =>
  axios
    .get('http://ip-api.com/json/')
    .then(({ data }) =>
      dispatch(
        addCity({
          city: data.city,
          countryCode: data.countryCode,
          lat: data.lat,
          lon: data.lon,
        })
      )
    )
    .catch(console.log);

export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;
