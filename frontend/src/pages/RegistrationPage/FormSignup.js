import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="sign-up-form-content-right">
      <div onSubmit={handleSubmit} className="signup-form" noValidate>
        <h1>Create Account</h1>
        <div className="sign-up-form-inputs">
          <input
            className="sign-up-form-input"
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="sign-up-form-inputs">
          <input
            className="sign-up-form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="sign-up-form-inputs">
          <input
            className="sign-up-form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="sign-up-form-inputs">
          <input
            className="sign-up-form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="sign-up-form-input-btn" type="submit">
          Continue
        </button>
        <br />
        <br />
        <span className="sign-up-form-input-login">
          Already have an account? <a href="#">Login</a>
        </span>
      </div>
    </div>
  );
};

export default FormSignup;
