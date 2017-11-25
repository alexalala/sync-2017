import React, { Component } from 'react';
import ItemModal from './item_modal';

import './item_of_clothing.css';

export default class ItemOfClothing extends Component {
  constructor() {
    super();

    this.state = {
      modal: false
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    this.setState((state) => {
      return {
      modal: !state.modal
    }});
  }

  render () {
    const { image } = this.props;
    return (
      <div className="item">
        <img className="img" src={image} onClick={this.handleToggleModal}/>
        <div className="item_deets">
          <p>ASOS</p>
          <p>£5.00</p>
        </div>
        <ItemModal open={this.state.modal} img={image} handleClose={this.handleToggleModal}/>
      </div>
    );
  }
}
