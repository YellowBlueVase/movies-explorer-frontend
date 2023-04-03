import { useState, useCallback } from "react";
// import isEmail from 'validator/es/lib/isEmail';

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const {value, name} = target;

    if (name === 'name' && target.validity.patternMismatch) {
      target.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
    } else {
      target.setCustomValidity('');
    }

    // if (name === 'email') {
    //   if (!isEmail(value)) {
    //       target.setCustomValidity('Некорректый адрес почты.');
    //   } else {
    //       target.setCustomValidity('');
    //   }
    // }
    
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}