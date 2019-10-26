import React from 'react';
import './header.css';

function Header() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <button
            className="header-link text-info"
            href="/"
            rel="noopener noreferrer"
          >
            Главная
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
