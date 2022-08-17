import React from 'react';
import './LogInPage.css';

const Login = () => {
    
      return (
        <div className="sign-up-form-content-right">
          <div  className="signup-form" noValidate>
            <h1>Sign In</h1>
            <h2>Access your account</h2>
            <div className="sign-up-form-inputs">
              <input
                className="sign-up-form-input"
                type="email"
                name="email"
                placeholder="Email"
                value="Email"
            
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            <div className="sign-up-form-inputs">
              <input
                className="sign-up-form-input"
                type="password"
                name="password"
                placeholder="Password"
                value="Password"
               
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
           
            <button>
              Show Password
            </button>
            <div>
            <div className='ui hidden divider'></div>
            <div className='ui hidden divider'></div>
            <button className="sign-up-form-input-btn" type="submit">
            Login
            </button>
            </div>
            <div className='ui hidden divider'></div>
            <span className="sign-up-form-input-login">
              Forgot Password? 
            </span>
          </div>
        </div>
      );
}

export default Login