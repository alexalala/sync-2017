import React, { Component } from 'react';
import './item_modal.css';

export default class ItemModal extends Component {
  render () {
    const { open, handleClose } = this.props;

    if (!open) {
      return null;
    }

    const brandName = "ASOS";
    const itemName = "Black Hoodie";
    const price = "£30";
    const sizes = ["XS", "S", "M", "L", "XS"];
    const hashtag = "mymarkit"
    return (
      <div className="item_modal">
        <div className="item_modal_content">
          <div className="avatar_modal"></div>
          <div className="chosen_item">
            <p>{ brandName } / { itemName } / { price }</p>
            <div className="item_image"></div>
            <p>{ sizes.join(" / ") }</p>
          </div>
          <span className="close" onClick={handleClose}>&times;</span>
          <div className="links">
            <p>My Avatar / #{ hashtag }</p>
            <button className="purchase">Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}
