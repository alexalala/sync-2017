import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import MainPage from './main_page';
import ResultsPage from './results_page';
import Me from './me';
export default class App extends Component {
  render () {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/results" component={ResultsPage}/>
          <Route path="/me" component={Me}/>
        </Switch>
      </Router>
      </div>)
  }
}
