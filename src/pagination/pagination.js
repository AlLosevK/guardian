 import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    SetPage = (pages) => {
      if (this.props.currentPage > 2) {
        return(
          <>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => { this.props.updateData(this.props.currentPage - 1)}}
                > { this.props.currentPage  - 1 }</a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => { this.props.updateData(this.props.currentPage)}}
                > { this.props.currentPage } </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => { this.props.updateData(this.props.currentPage + 1)}}
                > { this.props.currentPage  + 1 }</a>
            </li>
          </>
        )
      } else {
        return(
          <>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => { this.props.updateData(1)}}
                > 1 </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => { this.props.updateData(2)}}
                > 2 </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => { this.props.updateData(3)}}
                > 3 </a>
            </li>
          </>
        )
      }
    }

    render() {
      return(
            <div className="container">
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={() => { this.props.updateData(1)}}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                { this.SetPage(this.props.pages) }
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={() => { this.props.updateData(this.props.currentPage+1)}}
                    >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </div>
      )
    }
}

export default Pagination;
