import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  const handleLogout = e => {
    e.preventDefault();

    API.post("/user/logout", localStorage.getItem('token'))
        .then((res) => {
            localStorage.clear();
            navigate('/login');
        })
        // .then((response)=>{
        //     console.log(response.data);
        //     localStorage.clear();
        //     //navigate('/login');
        // })
        .catch((error) => {
          setErrors(validate(values, error.response.data));
        })

    // fetch('user/logout', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Token ${localStorage.getItem('token')}`
    //   }
    // })
    //    .then(res => res.json())
    //    .then(data => {
    //      localStorage.clear();
    //      navigate('/login');
    //    });
   };

  return (
    <div>
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
    </div>
  );
};

export default Logout;
