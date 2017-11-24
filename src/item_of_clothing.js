import React, { Component } from 'react';
import './item_of_clothing.css';

export default class ItemOfClothing extends Component {
  render () {
    return (
      <div className="item">
        <div className="img">
        </div>
        <p>ASOS</p>
        <p>£5.00</p>
      </div>
    );
  }
}
