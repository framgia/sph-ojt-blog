import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="sign-up-form-content-right">
      <img className="sign-up-form-img-2" src="Images/Check.png" alt="success" />
      <h1 className="sign-up-form-successfully-registered">
          You have successfully registered your account.</h1>
    </div>
  );
};

export default FormSuccess;
