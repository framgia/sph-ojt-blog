import { useState } from "react";
import API from "../../API";

const useForm = (validate) => {
    const [values, setValues] = useState({
      username: "",
      password: "",
    });
    
    const [errors, setErrors] = useState({});
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
    

    const clickLogin = (e) => {
        e.preventDefault();

        const valuesFormData={
            username: values.username,
            password: values.password
        };

        API.post("/user/login", valuesFormData)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', API.get("/token/auth", response));
            setLoginSuccess(true);
        })
        .catch((error) => {
            setErrors(validate(values, error.response.data));
            console.log(error.response.data);
          })
    };

    return { clickLogin, handleChange, loginSuccess, values, errors };
};

export default useForm;
