import React, { Component } from 'react';
import './search.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.updateSearchQuery(this.state.value);
    }
  }


  render(){
    return (
      <div className="main-search search">
        <input
          className="search-item"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.onKeyDown}
        ></input>
        <div className="search-icon bg-info"
          onClick={() => { this.props.updateSearchQuery(this.state.value)}}>
          <FontAwesomeIcon
            flip="horizontal"
            icon={ faSearch } />
        </div>
      </div>
    );
  }
}


export default Search;
