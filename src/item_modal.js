import React, { Component } from 'react';
import './item_modal.css';

export default class ItemModal extends Component {
  render () {
    return (
      <div className="item_modal">
        <div className="item_modal_content">
          <span className="close">&times;</span>
        </div>
      </div>
    );
  }
}
