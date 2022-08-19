export default function validateInfo(values, response) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    } 
    if(response.email == "This field must be unique."){
      errors.email = "Email already exists."
    } 
    if(response.username == "A user with that username already exists."){
      errors.username = "A user with that username already exists."
    }
    return errors;
  }
