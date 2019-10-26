import React, { Component } from 'react';
import Result from '../result/result';
import Search from '../search/search';
import Pagination from '../pagination/pagination';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    if (!this.state.articles.response) {
      console.log("yo");
      this.fetchAPI(this.props.APIurl);
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      console.log(prevState);
      console.log(this.state);
    }
  }

  fetchAPI(url) {
    fetch(url)
      .then(response => response.json())
      .then(
        response => {
          this.setState({
            isLoaded: true,
            articles: response
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
        });
      }
    );
  }

  updateCurrentPage = (value) => {
    this.setState({
      currentPage: value
    });
    this.updateAPIurl();
  }

  updateAPIurl = () => {
    this.setState({
      APIurl: this.props.APIurl +'&page='+this.state.currentPage
    });
    this.fetchAPI(this.state.APIurl);
  }

  render(){
    const { error, isLoaded, articles } = this.state;
    if (!articles.response && isLoaded) {
      return <div className="container"><div className="alert alert-danger" role="alert">Ошибка: API error</div></div>;
    } else if (!isLoaded) {
        return <div className="container"><div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div></div>;
      } else {
      return (
        <>
          <main className="main">
            <div className="container">
              <Search />
              <Result
                error={ error }
                isLoaded={ isLoaded }
                articles={ articles }
                currentPage={ articles.response.currentPage }
                />
              <Pagination
                updateAPIurl={ this.updateAPIurl }
                updateCurrentPage={ this.updateCurrentPage }
                currentPage={ articles.response.currentPage } />
            </div>
          </main>
        </>
      );
    }
  }


}


export default Main;
