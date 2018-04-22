import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    if(!this.props.isLoggedOn){
      return <LoginForm />;
    } else {
      return this.props.children
    }
  }
}

export default Login;
