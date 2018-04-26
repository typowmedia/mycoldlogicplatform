import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      RequestPassword: false,
      user: {
        name: 'Luis',
        manager: 'Dan Imbery',
        accessLevel: 1
      },
      toggleUserMenu: false,
      navLinks: ['/timeoff', '/bonus-recognitions', '/my-schedule', '/my-best-site-report', '/safe-site-report', 'open-positions']
    };
  }
  loginHandler = () => {
    // function will be changed to authenticate user and return user DATA
    this.setState(prevState => ({isAuthenticated: !prevState.isAuthenticated, toggleUserMenu: false}));
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
              isAuthenticated={this.state.isAuthenticated}
              logout={this.loginHandler}
              user={this.state.user}
              toggleUserMenu={this.toggleUserMenu}
              showMenu={this.state.toggleUserMenu}
            />
            <Router>
              <div>
                <Route exact path='/' render={() => this.state.isAuthenticated ? <Dashboard user={this.state.user} navLinks={this.state.navLinks}/> : <Redirect to='/login' />} />
                <Route exact path='/login' render={() => this.state.isAuthenticated ? <Redirect to='/' /> : <LoginForm requestPass={this.requestPassword} login={this.loginHandler}/>} />
              </div>
            </Router>
        </div>
    );
  }
}

export default App;
