import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import { Slider } from 'antd';
import './me.css';
import { Link } from 'react-router-dom';

import small from './assets/s.svg';
import medium from './assets/m.svg';
import large from './assets/l.svg';
import logo from './assets/main.png';
import female from './assets/female.png'

export default class Me extends Component {
  render () {
    return (
      <div className="me">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <div className="avatar">
          <img className="body" src={female}/>
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
          <Slider defaultValue={30} />
          <Link to="/">
            <button>Shop now</button>
          </Link>
        </div>
      </div>
    )
  }
}
