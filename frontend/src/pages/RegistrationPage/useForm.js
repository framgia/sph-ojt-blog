import { useState } from "react";
import API from "../../API";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [registerSuccess, setRegisterSuccess]=useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const valuesFormData={
      username: values.username,
      email: values.email,
      password: values.password
    };

      API.post("/user/register", valuesFormData)
        .then((response)=>{
          console.log(response.data);
          setRegisterSuccess(true);
        })
        .catch((error) => {
          setErrors(validate(values, error.response.data));
          console.log(error.response.data);
        })
  };

  return { handleChange, handleSubmit, registerSuccess, values, errors };
};

export default useForm;
