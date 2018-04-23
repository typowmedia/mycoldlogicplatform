import React, { Component } from 'react';

import './App.css';

import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import LoginForm from './Login/LoginForm';
import Header from './Header/Header';
import RequestPassword from './RequestPassword/RequestPassword';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedOn: true,
    };
  }
  login = () => {
    this.setState(prevState => ({isLoggedOn: !prevState.isLoggedOn}));
  }
  //============================================================================
  //  PLACE THE COMPONENT YOU WOULD LIKE TO WORK ON INSIDE THE LOGIN COMPONENT
  //============================================================================
  render() {
    return (
        <div className="App">
            <Header
              isLoggedOn={this.state.isLoggedOn}
              message='Welcome to My ColdLogic'/>
          <div className="Content-Section">
            <Login isLoggedOn={this.state.isLoggedOn}>
              <RequestPassword />
            </Login>
          </div>
        </div>
    );
  }
}

export default App;
