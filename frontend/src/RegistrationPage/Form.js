import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { useNavigate } from 'react-router-dom';


const Registration_Page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const navigate = useNavigate();
  return (
    <>
      <div className='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src='Images/RegIm2.jpg' alt='Computer' />
        </div>
        <div className='close-btn' onClick={() => navigate('/')}>
          X
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>

    </>
  );
};



export default Registration_Page;