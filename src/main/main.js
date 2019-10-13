import React from 'react';
import GuardianApi from '../GuardianApi';
import './main.css';

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <input
            className="main-search"
            type="text"
          ></input>
        </div>
        <GuardianApi />
      </main>
    </>
  );
}

export default Main;
