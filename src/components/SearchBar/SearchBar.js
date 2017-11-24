import React from 'react';
import './SearchBar.css';
const sortByOptions= {
   'Best Match': 'best_match',
   'Highest Rated': 'rating',
   'Most Reviewed': 'review_count'
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      term:'',
      location:'',
      searchBy: 'best_match'
    };
    this.handleSortByChange= this.handleSortByChange.bind(this);
    this.handleTermChange= this.handleTermChange.bind(this);
    this.handleLocationChange= this.handleLocationChange.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption =>
    { let sortByOptionValue= sortByOptions[sortByOption];
      return <li className= {this.getSortByClass(sortByOptionValue)} onClick= {this.handleSortByChange.bind(this, sortByOptionValue)}
        key= {sortByOptionValue}> {sortByOption} </li>
    });  //this code will be examined in './SearchBarTEST' //also look at the less than sign functionality
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy=== sortByOption) {
      return 'active';
    }
    else {
      return '';
    }
    }

    handleSortByChange(sortByOption) {
      this.setState({sortBy: sortByOption})
    }

    handleTermChange(event) {
      this.setState({term: event.target.value})  //must include .target.value because we are listening for a user input
    }                                           //so user input will be the even, target listens to it and value takes the value of it
                                              //at least i think this is how it works... reference link
                                              //https://stackoverflow.com/questions/38420396/how-to-get-value-of-textbox-in-react
                                              //also this was explained in codecademy

    handleLocationChange(event) {
     this.setState({location: event.target.value})
    }

    handleSearch(event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.searchBy);
      event.preventDefault();

    }
             //just changed class -> className because that's the syntax in react...idk if problem will arise
             // on div "SearchBar" below!
  render() {
    return (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input onChange= {this.handleTermChange}  placeholder="Search Businesses" />
    <input onChange= {this.handleLocationChange} placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a onClick= {this.handleSearch}>Let's Go</a>
  </div>
</div> );
  }
}

export default SearchBar
