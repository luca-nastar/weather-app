import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIpLocation } from '../redux/slices/citiesSlice';

const useCities = () => {
  const cities = useSelector((state) => state.cities);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIpLocation()).then(() => setIsLoading(false));
  }, [dispatch]);

  return {
    cities,
    isLoading,
  };
};

export default useCities;
