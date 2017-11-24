import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Configuration from './configuration';
export default class App extends Component {
  render () {
    return (<div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Configuration}/>
          </Switch>
      </Router>
      </div>)
  }
}
