import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../components/Header/Header';
import Timeoff from '../Timeoff/Timeoff';
import BonusRecognition from '../BonusRecognition/BonusRecognition';

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
            <Route path='/bonus-recognitions' render={() => <BonusRecognition {...this.props}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
