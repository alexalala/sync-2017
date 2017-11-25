import React, { Component } from 'react';
import './item_modal.css';

export default class ItemModal extends Component {
  render () {
    const { open, handleClose, img } = this.props;

    if (!open) {
      return null;
    }

    const brandName = "ASOS";
    const itemName = "Red Dress";
    const price = "£30";
    const sizes = ["XS", "S", "M", "L", "XL"];
    const hashtag = "mymarkit"
    return (
      <div className="item_modal">
        <div className="item_modal_content">
          <div className="avatar_modal"></div>
          <div className="chosen_item">
            <p>{ brandName } / { itemName } / { price }</p>
            <img className="item_image" src={img} />
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
