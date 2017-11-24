import React, { Component } from 'react';
import Search from './search';
import Filter from './filter';

export default class Configuration extends Component {
  render () {
    return (
      <div className="main">
        <Search />
        <Filter />
      </div>
    );
  }
}
