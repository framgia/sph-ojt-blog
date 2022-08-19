import React from 'react';
import './LogInPage.css';
import useForm from './useForm';
import validate from './validateLogin';

const Login = ( ) => {
  const { handleChange, clickLogin, values, errors } = useForm(
    validate
  );
  return (
    <div className="login-form">
      <div  className="signup-form" noValidate>
        <h1>Sign In</h1>
        <h2>Access your account</h2>
        <div className="login-input">
          <input
            className="login-text-input"
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="login-input">
          <input
            className="login-text-input"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <div>
        <div className='ui hidden divider'/>
        <button className="login-input-button" type="submit" onClick={ clickLogin }>
        Login
        </button>
        </div>
        <div className='ui hidden divider'/>
        {/* <span className="input-login-form">
          Forgot Password? 
        </span> */}
      </div>
    </div>
  );
}

export default Login
