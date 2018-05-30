import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      user: {
        firstName: 'Luis',
      },
      navLinks: [
        'timeoff',
        'bonus-recognitions',
        'my-schedule',
        'best-site-report',
        'safe-site-report',
        'open-positions'
      ],
      tempRes: '',
      error: ''
    };
  }
  componentDidMount() {
    axios.get('/Associates/1')
      .then(res => console.log('[Login] :', res.data));
  }

  logUserIn = (user) => {
    this.setState({
      isAuthenticated: true,
      //user: user
    });
  }

  logUserOut = () => {
    this.setState({
      isAuthenticated: false,
      user: ''});
  };

  render() {
    let app =
    (
      <Login
        logUserIn={this.logUserIn}
        />
    );
    if(this.state.isAuthenticated && this.state.user !== ''){
      app = (
        <Main
          user={this.state.user}
          isAuthenticated={this.state.isAuthenticated}
          logUserOut={this.logUserOut}
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
