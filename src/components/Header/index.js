import React from "react";
import './Header.css';
import logo from '../../assets/images/logo-wwcode.png';
function Header() {
  return (
    <header className="main-header">
   
    <div className="main-header-logo-container">
       <a href="https://www.womenwhocode.com/">
       <img src={logo} alt="logowwcode"/>
    </a>
    </div>
    </header>


  );
}

export default Header;

