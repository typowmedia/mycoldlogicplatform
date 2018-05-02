import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: {
        name: 'Luis',
        manager: 'Dan Imbery',
        accessLevel: 1
      },
      navLinks: ['timeoff', 'bonus-recognitions', 'my-schedule', 'my-best-site-report', 'safe-site-report', 'open-positions']
    };
  }

  loginUser = (user) => {
  this.setState({isAuthenticated: true});
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
}

export default App;
