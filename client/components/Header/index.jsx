import React from 'react';
import logo from '../../assets/images/frappuccino.png';

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img alt="Frappuccino" height="22" src={logo} />
            </a>
            <p className="navbar-text">Frappuccino</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
