import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect} from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import Header from '../../components/Header/Header';
import Timeoff from '../../components/Timeoff/Timeoff';

class Main extends Component {
  render(){
    return(
      <div>
        <Header
          {...this.props}
        />
        <Router>
          <div>
            <Route exact path='/' render={() => <Dashboard {...this.props}/>} />
            <Route path='/timeoff' render={() => <Timeoff {...this.props}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
