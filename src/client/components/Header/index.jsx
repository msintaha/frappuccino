import React from 'react';

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">
              <img alt="Frappuccino" height="22" src="./assets/frappuccino.png" />
            </a>
            <p class="navbar-text">Frappuccino</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
