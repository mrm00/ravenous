import React, { Component } from 'react';
//import logo from './logo.svg'; -> warning: unused
import './App.css';
import Business from './components/Business/Business';
import SearchBar from './components/SearchBar/SearchBar';
import {BusinessList} from "./components/BusinessList/BusinessList";
import Yelp from './util/Yelp';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state =   {
      businesses: []
    };
    this.searchYelp= this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      console.log("Business:" + businesses);
      this.setState({businesses: businesses})});
  }
  render() {
    console.log(this.state.businesses);
    return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp= {this.searchYelp} />
  <BusinessList businesses= {this.state.businesses} />
</div> );
  }
}

export default App;
