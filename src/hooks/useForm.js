import { useState } from 'react';

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const onChange = (value, field) => {
    setState({ ...state, [field]: value });
  };

  return {
    ...state,
    state,
    setState,
    onChange,
  };
};

export default useForm;
