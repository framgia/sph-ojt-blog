import { useState, useEffect } from "react";
import API from "../../API";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
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

      API.post("/user/register", valuesFormData)
        .then((response)=>{
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
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
