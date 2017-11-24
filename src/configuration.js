import React, { Component } from 'react';
import Search from './search';
import Filter from './filter';
import ItemOfClothing from './item_of_clothing';

export default class Configuration extends Component {
  render () {
    return (
      <div className="main">
        <Search />
        <Filter />
        <div className="items">
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
        </div>
      </div>
    );
  }
}
