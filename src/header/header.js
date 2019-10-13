import React from 'react';
import './header.css';

function Header() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <a
            className="header-link"
            href="https://google.ru"
            target="_blank"
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
