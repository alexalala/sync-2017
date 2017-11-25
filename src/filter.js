import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import { Slider } from 'antd';
import './filter.css';
import colours from './assets/colour-wheel.jpg';

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
            <ul>
              <li>ASOS</li>
              <li>New Look</li>
              <li>Boohoo</li>
            </ul>
          </div>
          <div className="colour">
            <h3>Colours</h3>
            <img src={colours} />
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
