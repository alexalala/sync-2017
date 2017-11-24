import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
  render () {
    const placeholder = "foo";
    return (
      <input type="text" placeholder={placeholder} />
    );
  }
}
