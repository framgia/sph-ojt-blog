import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Button, Modal } from "semantic-ui-react";
import FormSignup from "../../pages/RegistrationPage/FormSignup";
import FormSuccess from "../../pages/RegistrationPage/FormSuccess";

const NavBar = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
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

      <div className="ui hidden divider"></div>
      <div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button className="signup-btn" color="red">
              Sign Up
            </Button>
          }
          content={
            <div className="sign-up-form-container">
              <Button
                className="close-btn"
                basic
                onClick={() => setOpen(false)}
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
      </div>
    </>
  );
};

export default NavBar;
