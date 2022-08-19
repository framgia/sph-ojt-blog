import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import FormSuccess from './FormSuccess';

const FormSignup = () => {
  const { handleChange, handleSubmit, registerSuccess, values, errors } = useForm(
    validate
  );

  return registerSuccess? <FormSuccess/> :(
    <div className='sign-up-form-content-right'>
      <form onSubmit={handleSubmit} className='signup-form' noValidate>
        <h1>
          Create Account
        </h1>
        <div className='sign-up-form-inputs'>
          <input
            className='sign-up-form-input'
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='sign-up-form-inputs'>
          <input
            className='sign-up-form-input'
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='sign-up-form-inputs'>
          <input
            className='sign-up-form-input'
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='sign-up-form-input-btn' type='submit'>
          Register
        </button>
        <span className='sign-up-form-input-login'>
          Already have an account? Please Login.
        </span>
      </form>
    </div>
  );
};

export default FormSignup;