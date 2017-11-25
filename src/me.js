import React, { Component } from 'react';
import './me.css';

import small from './assets/s.svg';
import medium from './assets/m.svg';
import large from './assets/l.svg';
import logo from './assets/main.png';

export default class Me extends Component {
  render () {
    return (
      <div className="me">
        <img className="logo" src={logo} />
        <h2>Avatar creator</h2>
        <div className="avatar">
          <div className="body"></div>
        </div>
        <div className="size_selector">
          <h3>Choose your gender</h3>
          <div className="gender">
            <label>
              Male
              <input type="radio" id="genderM" name="gender"/>
            </label>
            <p> / </p>
            <label>
              Female
              <input type="radio" id="genderM" name="gender"/>
            </label>
          </div>
          <h3>Choose your body type</h3>
          <div className="bodies">
            <img className="small" src={small} />
            <img className="med" src={medium} />
            <img className="lg" src={large} />
          </div>
          <h3>Choose your height</h3>
        </div>
      </div>
    )
  }
}
