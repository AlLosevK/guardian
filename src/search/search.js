import React, { Component  }from 'react';
import './search.css';
import { faSearch  }from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt  }from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  }from "@fortawesome/react-fontawesome";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',showAdvanced: "none", maxDate: "", pickDate: ""};

    this.handleChange = this.handleChange.bind(this);
    this.showAdvanced = this.showAdvanced.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
   }

  handleChange(event) {
    this.setState({value: event.target.value });
   }

  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.updateSearchQuery(this.state.value);
     }
   }

  showAdvanced() {
    let a = this.state.showAdvanced;
    let d = new Date();
    let n = this.getMaxDate(d);
    let t = this.getMinDate(d);
    a === "none" ? a = "block" : a = "none";
    this.setState({
      showAdvanced: a,
      maxDate: n,
      minDate: t
     });
  }

  getMaxDate(date) {
    let y = date.getFullYear();
    date.setMonth(11);
    let m = (date.getMonth()) === 11 ? ("0" + date.getMonth() - 10) : (date.getMonth() + 1);
    let d = date.getDate();
    return(
      y+"-"+m+"-"+d
    )
  }

  getMinDate(date) {
    let y = date.getFullYear();
    let m = (date.getMonth() - 1) <10 ? ("0" + date.getMonth() - 1) : (date.getMonth() - 1);
    let d = date.getDate();
    return(
      y+"-"+m+"-"+d
    )
  }

  setStartDate(date) {
    this.setState({startDate: date });
  }


  render(){
    return (
      <>
        <div className="main-search search">
          <input
            className="search-item"
            type="text"
            value={ this.state.value }
            onChange={ this.handleChange }
            onKeyPress={ this.onKeyDown }
          ></input>
          <div className="search-icon bg-info"
            onClick={ () => { this.props.updateSearchQuery(this.state.value) }}>
            <FontAwesomeIcon
              flip="horizontal"
              icon={  faSearch  }/>
          </div>
          <div className="search-icon bg-info"
            onClick={ this.showAdvanced }>
            <FontAwesomeIcon
              flip="horizontal"
              icon={  faCalendarAlt  }/>
          </div>
        </div>
        <div className="search-advanced">
          <input
            className="search-advanced-calendar"
            type="date"
            defaultValue={ this.state.maxDate }
            min={ this.state.minDate }
            max={ this.state.maxDate }
            id="calendarClick"
            onChange={ this.setStartDate }
            style={ { display: this.state.showAdvanced}}
            ></input>
        </div>
      </>
    );
   }
 }


export default Search;
