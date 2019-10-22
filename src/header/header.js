import React from 'react';
import './header.css';

function Header() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <a
            className="header-link text-info"
            href="/"
            rel="noopener noreferrer"
          >
            Главная
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
