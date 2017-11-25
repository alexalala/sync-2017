import React, { Component } from 'react';
import Search from './search';
import Filter from './filter';
import ItemOfClothing from './item_of_clothing';
import { Route, Link } from 'react-router-dom';
import rd1 from './assets/rd1.jpeg'
import rd2 from './assets/rd2.jpeg'
import rd3 from './assets/rd3.jpeg'

export default class ResultsPage extends Component {
  render () {
    return (
      <div className="ResultsPage">
        <Search type={"CONTRACTED"}/>
        <Filter />
        <div className="items">
          <ItemOfClothing image={rd1}/>
          <ItemOfClothing image={rd2}/>
          <ItemOfClothing image={rd3}/>
          <ItemOfClothing />
          <ItemOfClothing />
          <ItemOfClothing />
        </div>
      </div>
    );
  }
}
