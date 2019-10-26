 import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    SetPage = () => {
      if(this.props.currentPage===1){
        return(
          <>
            <li className="page-item disabled">
              <span
                className="page-link"
                onClick={() => { this.props.updateCurrentPage(1);}}>Previous</span>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link"
                >{ this.props.currentPage }
                <span className="sr-only">
                (current)</span>
              </span>
            </li>
              <li className="page-item">
                <button
                  className="page-link"

                  onClick={() => { this.props.updateCurrentPage(this.props.currentPage + 1);}}>
                  { this.props.currentPage  + 1 }</button>
              </li>
            <li className="page-item">
              <button
                className="page-link"

                onClick={() => { this.props.updateCurrentPage(this.props.currentPage + 2);}}
                >{ this.props.currentPage  + 2 }</button>
            </li>
          </>
        )
      }else if (this.props.currentPage===2) {
        return(
          <>
            <li className="page-item disabled">
              <span
                className="page-link"
                onClick={() => { this.props.updateCurrentPage(1);}}>Previous</span>
            </li>
            <li className="page-item">
              <button
                className="page-link"

                onClick={() => { this.props.updateCurrentPage(this.props.currentPage - 1);}}>
                { this.props.currentPage  - 1 }</button>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link"
                >{ this.props.currentPage }
                <span className="sr-only">
                (current)</span>
              </span>
            </li>
            <li className="page-item">
              <button
                className="page-link"

                onClick={() => { this.props.updateCurrentPage(this.props.currentPage + 1);}}
                >{ this.props.currentPage  + 1 }</button>
            </li>
          </>
        )
      } else {
        return(
          <>
            <li className="page-item">
              <span
                className="page-link"
                onClick={() => { this.props.updateCurrentPage(1);}}>Previous</span>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => { this.props.updateCurrentPage(this.props.currentPage - 1);}}>{ this.props.currentPage - 1 }</button>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                { this.props.currentPage }
                <span className="sr-only">
                (current)</span>
              </span>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => { this.props.updateCurrentPage(this.props.currentPage + 1);}}>{ this.props.currentPage +1 }</button>
            </li>
          </>
        )
      }
    }

    render() {
      return(
            <div className="container">
              <ul className="pagination">
                { this.SetPage() }
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => { this.props.updateCurrentPage(this.props.currentPage+1);}}
                    >Next</button>
                </li>
              </ul>
            </div>
      )
    }
}

export default Pagination;
