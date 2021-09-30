import logo from "../../assets/img/logo1.png";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="headerContainer">
        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <div className="headerItems">
          <ul>
            <li className="active">Home</li>
            <li>Services</li>
            <li>Case</li>
            <li>DaCode Specialist</li>
            <li>Blog</li>
            <li className="reqButton">Request a quote</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
