import React, { Component } from 'react';
import Search from './search';
import Filter from './filter';
import ItemOfClothing from './item_of_clothing';
import ItemModal from './item_modal';
import { Route, Link } from 'react-router-dom';

export default class ResultsPage extends Component {
  render () {
    return (
      <div className="ResultsPage">
        <Search type={"CONTRACTED"}/>
        <Filter />
        <div className="items">
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
        </div>
        <ItemModal />
      </div>
    );
  }
}
