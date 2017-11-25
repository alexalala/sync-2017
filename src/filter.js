import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      collapsed: true
    }
    this.handleToggleCollapse = this.handleToggleCollapse.bind(this)
  }
  handleToggleCollapse () {
    this.setState((state) => {
      return {
        collapsed: !state.collapsed
      }
    })
  }
  renderFilter () {
    if (this.state.collapsed || this.props.collapsed) {
      return (
        <div className="collapsed">
          <a onClick={this.handleToggleCollapse}>Filters +</a>
        </div>
      )
    } else {
      return (
        <div className="expanded">
          <a onClick={this.handleToggleCollapse}>Filters -</a>
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
      )
    }
  }
  render () {
    return (
      <div className="filter">
        {this.renderFilter()}
      </div>
    );
  }
}
