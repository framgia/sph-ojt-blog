export default function validateInfo(values, response) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } 
    else{
      console.log(response);
      errors.password = "Invalid Username or Password";
    }

    return errors;
  }
