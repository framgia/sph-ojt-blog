import { useState, useEffect } from 'react';
import axios from 'axios';
import API from "../../API";
const base_url = 'http://127.0.0.1:8000/api/user/register'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    const valuesFormData={
      username: values.username,
      email: values.email,
      password: values.password
    };
    // valuesFormData.append("username", values.username)
    // valuesFormData.append("email", values.email)
    // valuesFormData.append("password", values.password) 

    try{
      API.post("/user/register", valuesFormData).then((response)=>{
        console.log(response.data)
      })
    }catch(error){
      console.log(error);
    }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
