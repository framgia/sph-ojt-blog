import React from "react";
import "./Footer.css"

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer" >
      <p>Team 3 | Sun* | Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;
