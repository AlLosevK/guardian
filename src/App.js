import React  from 'react';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const APIkey = 'c7286cc5-68b5-4f94-9c9e-34a72aea7310';

/*
  b01eca1a-fb17-40b5-9c8a-07d21a77372a
  7a156abf-149f-4689-9edd-56d286ee8480
  c7286cc5-68b5-4f94-9c9e-34a72aea7310
*/

const APIurl = 'https://content.guardianapis.com/search?&order-by=relevance&api-key=' + APIkey;

function App() {
  return (
    <>
      <Header />
      <Main APIurl={APIurl}/>
      <Footer />
    </>
  );
}

export default App;
