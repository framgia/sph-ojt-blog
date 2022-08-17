import React from 'react';
import './LogInPage.css';

const Login = () => {
    
      return (
        <div className="login-form">
          <div  className="signup-form" noValidate>
            <h1>Sign In</h1>
            <h2>Access your account</h2>
            <div className="login-input">
              <input
                className="login-text-input"
                type="email"
                name="email"
                placeholder="Email"
                value="Email"
            
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            <div className="login-input">
              <input
                className="login-text-input"
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
            <div className='ui hidden divider'/>
            <button className="login-input-button" type="submit">
            Login
            </button>
            </div>
            <div className='ui hidden divider'/>
            <span className="input-login-form">
              Forgot Password? 
            </span>
          </div>
        </div>
      );
}

export default Login
