import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div> );
  }
}

export default App;