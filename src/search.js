import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
  render () {
    const placeholder = "Search";
    return (
      <div className="expanded_search">
        <input type="text" placeholder={placeholder} />
      </div>
    );
  }
}
