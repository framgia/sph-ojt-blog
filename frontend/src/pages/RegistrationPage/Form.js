import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import { useNavigate } from "react-router-dom";


const Registration_Page = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="sign-up-form-container">

        <div className="sign-up-form-content-left">
          <img className="sign-up-form-img" src="Images/RegIm2.jpg" alt="Computer" />
        </div>
        <div className="close-btn" onClick={() => navigate("/")}>
          X
        </div>
          <FormSignup />
      </div>

    </>
  );
};

export default Registration_Page;
