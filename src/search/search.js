import React from 'react';
import './search.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="main-search search">
      <input
        className="search-item"
        type="text"
      ></input>
      <div className="search-icon bg-info">
        <FontAwesomeIcon
          flip="horizontal"
          icon={ faSearch } />
      </div>
    </div>
  )
}


export default Search;
