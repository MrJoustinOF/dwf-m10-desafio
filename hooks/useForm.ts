import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange: any = ({ target }: any) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange, setValues];
};
