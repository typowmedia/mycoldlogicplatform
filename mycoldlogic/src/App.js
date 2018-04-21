import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

import './App.css';

import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Header from './Header/Header';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedOn: true,
      appLinks: {
        dashboard: '/',
        login: '/login',
        timeoff: '/timeoff',
        mySchedule: '/my-schedule',
        myRecog: '/my-recognitions'
      }
    };
  }
  login = () => {
    this.setState(prevState => ({isLoggedOn: !prevState.isLoggedOn}));
  }
  render() {
    return (
        <div className="App">
          <Header message='Welcome to My ColdLogic'/>
          <Login isLoggedOn={this.state.isLoggedOn}>
            <Dashboard />
          </Login>
        </div>
    );
  }
}

export default App;
