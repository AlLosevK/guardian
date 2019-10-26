import React, { Component } from 'react';
import './result.css';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }


    render() {
      const { error, isLoaded, articles } = this.props;
        if (error===1) {
          return <div className="alert alert-danger" role="alert">Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                 </div>;
        } else {
          return (
            <div className="main__results results list-group">
              {
                articles.response.results.map((d, idx)=>{
                 return (
                   <>
                     <a
                      key={idx}
                      className="results__item list-group-item"
                      href={d.webUrl}
                      target="_blank"
                        >
                        <div
                          className="results__link"
                        >
                          <h5>
                            {d.webTitle}
                            <span className="badge badge-secondary" key={idx}>
                              {d.sectionName}
                            </span>
                          </h5>
                        </div>
                     </a>
                   </>
                 )
               })
             }
            </div>
          );
        }
      }
  }

export default Result;
