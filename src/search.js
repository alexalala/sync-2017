import React, { Component } from 'react';
import './search.css';
import FontAwesome from 'react-fontawesome';

export default class Search extends Component {
  render () {
    const placeholder =  "Search for items... (eg. black hoodie)";
    return (
      <div className="contracted_search">
        <input type="text" placeholder={placeholder} />
        <button type="submit">
          <FontAwesome name="search" />
          Search
        </button>
      </div>
    );
  }
}
