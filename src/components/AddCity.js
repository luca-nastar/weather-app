import React, { useState } from 'react';
import { Button, Card, Fab, TextField, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

import useForm from '../hooks/useForm';
import { getCoordinatesAPI } from '../api/getCoordinates';
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/slices/citiesSlice';

const AddCity = () => {
  const { city, setState, onChange } = useForm({ city: '' });

  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof city !== 'string') {
      setState({ city: '' });
      return alert('Debe ingresar una ciudad valida');
    }

    try {
      const { data } = await getCoordinatesAPI(city);

      if (data.length === 0) {
        setState({ city: '' });
        return alert('Esa ciudad no existe');
      }

      const { name, local_names, country: countryCode, lat, lon } = data[0];

      dispatch(
        addCity({
          city: local_names.es || name,
          countryCode,
          lat,
          lon,
        })
      );
      setState({ city: '' });
      setIsAdding(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 250,
        minHeight: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        p: 1,
        m: 1,
      }}
    >
      <Typography variant="h6">Agregar una ciudad</Typography>

      {isAdding ? (
        <>
          <TextField
            autoFocus
            variant="standard"
            value={city}
            placeholder="Nombre de la ciudad"
            onChange={({ target }) => onChange(target.value, 'city')}
          />
          <Button variant="contained" type="submit">
            Agregar
          </Button>
        </>
      ) : (
        <Fab onClick={() => setIsAdding(true)}>
          <Add />
        </Fab>
      )}
    </Card>
  );
};

export default AddCity;
