import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: 'Luis',
      navLinks: ['timeoff', 'bonus-recognitions', 'my-schedule', 'my-best-site-report', 'safe-site-report', 'open-positions']
    };
  }

  loginUser = (user) => {
    this.setState({
      isAuthenticated: true,
      user: {
        name: 'Luis',
        mananger: 'Dan Emberly',
        accessLevel: 1
      }
    });
  }

  render() {
    let app = (
      <Login
        logUserIn={this.loginUser}
        />);
    if(this.state.isAuthenticated && this.state.user){
      app = (
        <Main
          user={this.state.user}
          isAuthenticated={this.state.isAuthenticated}
          navLinks={this.state.navLinks}
          />);
    }
    return (
        <div className="App">
            {app}
        </div>
    );
  }

  // LIFE CYCLE METHODS
  componentDidMount(){
    
  }
}

export default App;
