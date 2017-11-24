import React, { Component } from 'react';
import './item_modal.css';

export default class ItemModal extends Component {
  render () {
    const brandName = "ASOS";
    const itemName = "Black Hoodie";
    const price = "£30";
    const sizes = ["XS", "S", "M", "L", "XS"];
    const hashtag = "mymarkit"
    return (
      <div className="item_modal">
        <div className="item_modal_content">
          {/* On click close modal */}
          <div className="avatar"></div>
          <div className="chosen_item">
            <p>{ brandName } / { itemName } / { price }</p>
            <div className="item_image"></div>
            <p>{ sizes.join(" / ") }</p>
          </div>
          <span className="close">&times;</span>
          <div className="links">
            <p>My Avatar / #{ hashtag }</p>
            <button className="purchase">Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}
