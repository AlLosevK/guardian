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
    fetch(this.props.APIurl)
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
  componentDidUpdate() {
    fetch(this.props.APIurl+'&page='+this.state.currentPage)
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
  // changePage = () => {
  //   return(APIpage = APIpage + '&page=' + this.state.currentPage)
  // }

  updateData = (value) => {
    this.setState({
      currentPage: value
    })
  }

  render(){
    const { error, isLoaded, articles } = this.state;
    if (articles.message!==false) {
      return <div className="container"><div className="alert alert-danger" role="alert">Ошибка: {articles.message}</div></div>;
    } else if (!isLoaded) {
        return <div className="container"><div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div></div>;
      } else {
      return (
        <>
          <main className="main">
            <div className="container">
              <Search />
              <Result
                error={ error}
                isLoaded={ isLoaded }
                articles={ articles }
                currentPage={ articles.response.currentPage }
                />
              <Pagination
                updateData={this.updateData}
                currentPage={ articles.response.currentPage }
                pages= { articles.response.pages } />
            </div>
          </main>
        </>
      );
    }
  }


}


export default Main;
