import React from 'react';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} height="22" className="logo" />
        <a className="navbar-brand" href="/">Frappuccino</a>
      </nav>
      <br />
    </div>
  );
}

export default Header;
