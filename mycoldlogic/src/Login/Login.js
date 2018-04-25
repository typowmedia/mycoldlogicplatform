import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
      RequestPassword: false
    }
  }
  render(){
    let login = <LoginForm />;
    return(
      {login}
    )
  }
}

export default Login;
