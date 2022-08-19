import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Button, Modal } from "semantic-ui-react";
import FormSignup from "../../pages/RegistrationPage/FormSignup";
import FormSuccess from "../../pages/RegistrationPage/FormSuccess";
 
import Login from "../../pages/LogInPage/LogInPage";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  function submitForm() {
    setIsSubmitted(true);
  }

  function clickLogOut(){
    localStorage.clear();
    setIsAuth(false);
    navigate("/");
  }

  return (
    <>
      <div className="ui fluid secondary pointing menu">
        <NavLink className="item" to={"/"}>
          Home
        </NavLink>
        <NavLink className="item" to={"/posts"}>
          All Blogs
        </NavLink>
        
      </div>
      {isAuth === true ? (
        <Fragment>
          {' '}
          <li>
            <div className="LogOut">
            <Button 
              className="logout-btn" 
              color="red"
              onClick={clickLogOut}>
              Log Out
            </Button>
            </div>
          </li>
        </Fragment>
      ) : (
        <Fragment>
          <div className="ui hidden divider"></div>
          <div>
            <Modal
              onClose={() => setOpenSignUp(false)}
              onOpen={() => setOpenSignUp(true)}
              open={openSignUp}
              trigger={
                <Button className="signup-btn" color="red">
                  Sign Up
                </Button>
              }
              content={
                <div className="sign-up-form-container">
                  <Button
                  className="close-btn"
                  color = "red"
                  onClick={() => setOpenSignUp(false)}
                  >
                    X
                  </Button>
                <div className="sign-up-form-content-left">
                  <img
                    className="sign-up-form-img"
                    src="Images/RegIm2.jpg"
                    alt="Computer"
                  />
                </div>
              {!isSubmitted ? (
                <FormSignup submitForm={submitForm} />
              ) : (
                <FormSuccess />
              )}
              </div>
              }
            />
        
            <Modal
              className="sign-up-button-display"
              onClose={() => setOpenLogin(false)}
              onOpen={() => setOpenLogin(true)}
              open={openLogin}
              trigger={
                <Button className="login-btn" color="blue">
                  Log In
                </Button>
              }
              content={
                  <div className="sign-up-form-container">
                    <Button
                      className="close-btn"
                      basic
                      onClick={() => setOpenLogin(false)}
                    >
                      X
                    </Button>
                    <div className="sign-up-form-content-left">
                      <img
                        className="sign-up-form-img"
                        src="Images/RegIm2.jpg"
                        alt="Computer"
                      />
                    </div>
                    <Login/>
                  </div>
              }
            />
          </div>
        </Fragment>
      )}
    </>
  );
};

export default NavBar;