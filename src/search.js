import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
  render () {
    const placeholder = "Search for items... (eg. black hoodie)";
    return (
      <div className="expanded_search">
        <input type="text" placeholder={placeholder} />
        <button type="submit">Search</button>
      </div>
    );
  }
}
