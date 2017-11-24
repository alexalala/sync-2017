import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {
  render () {
    return (
      <div className="filter">
        <div className="brand">
          <h3>Brand</h3>
          {/* Replace with v-for equivalent for each brand */}
        </div>
        <div className="colour">
          <h3>Colours</h3>
          {/* Colour wheel, maybe JS plugin */}
        </div>
        <div className="cost">
          <h3>Price Range</h3>
          {/* Draggable slider */}
        </div>
      </div>
    );
  }
}
