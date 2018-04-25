import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import './App.css';

import Dashboard from './Dashboard/Dashboard';
import LoginForm from './LoginForm/LoginForm';
import Header from './Header/Header';
import RequestPassword from './RequestPassword/RequestPassword';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedOn: false,
      RequestPassword: false,
      user: {
        name: 'Luis',
        manager: 'Dan Imbery',
        accessLevel: 1
      },
      toggleUserMenu: false
    };
  }
  loginHandler = () => {
    // function will be changed to authenticate user and return user DATA
    this.setState(prevState => ({isLoggedOn: !prevState.isLoggedOn}));
  }
  requestPassword = () => {
    this.setState(prevState => ({requestPassword: !prevState.requestPassword}));
  }
  toggleUserMenu = () => {
    this.setState(prevState => ({toggleUserMenu: !prevState.toggleUserMenu}))
  }


  //============================================================================
  //  PLACE THE COMPONENT YOU WOULD LIKE TO WORK ON INSIDE THE LOGIN COMPONENT
  //============================================================================
  render() {
    return (
        <div className="App">
            <Header
              isLoggedOn={this.state.isLoggedOn}
              logout={this.loginHandler}
              user={this.state.user}
              toggleUserMenu={this.toggleUserMenu}
              showMenu={this.state.toggleUserMenu}
            />
            <Router>
              <div>
                <Route exact path='/' render={() => this.state.isLoggedOn ? <Dashboard user={this.state.user} /> : <Redirect to='/login' />} />
                <Route exact path='/login' render={() => this.state.isLoggedOn ? <Redirect to='/' /> : <LoginForm requestPass={this.requestPassword} login={this.loginHandler}/>} />
              </div>
            </Router>
        </div>
    );
  }
}

export default App;
