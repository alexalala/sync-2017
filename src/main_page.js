import React, { Component } from 'react';
import Search from './search';
import Filter from './filter';
import ItemOfClothing from './item_of_clothing';
import ItemModal from './item_modal';
import { Route, Link } from 'react-router-dom';

export default class MainPage extends Component {
  render () {
    return (
      <div className="main">
        <Search />
      </div>
    );
  }
}
