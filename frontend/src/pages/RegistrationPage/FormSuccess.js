import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="sign-up-form-content-right">
      <img className="sign-up-form-img-2" src="Images/Check.png" alt="success" />
      <span className="sign-up-form-successfully-registered">
          You have successfully registered your account.</span>
    </div>
  );
};

export default FormSuccess;
