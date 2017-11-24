import React, { Component } from 'react';
import './search.css';
import FontAwesome from 'react-fontawesome';

import logoWhite from './assets/logo_white.png';
import logo from './assets/main.png';
import { Link } from 'react-router-dom';
export default class Search extends Component {

  render () {
    const { type } = this.props;

    const placeholder =  "Search for items... (eg. black hoodie)";

    const wrappingClassName = type === 'CONTRACTED' ? 'contracted_search' : 'expanded_search';

    const correctLogo = type === 'CONTRACTED' ? logo : logoWhite;
    return (
      <div className={wrappingClassName}>
        <img className="logo" src={correctLogo} />
        <input type="text" placeholder={placeholder} />
        <Link to="/results">
        <button type="submit">
          <FontAwesome name="search" />
          Search
        </button>
        </Link>
      </div>
    );
  }
}
