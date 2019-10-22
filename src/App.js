import React, { Component }  from 'react';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const APIkey = '7a156abf-149f-4689-9edd-56d286ee8480';

const APIurl = 'https://content.guardianapis.com/search?show-elements=image&api-key=' + APIkey;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <>
        <Header />
        <Main APIurl={APIurl}/>
        <Footer />
      </>
    );
  }
}

export default App;
