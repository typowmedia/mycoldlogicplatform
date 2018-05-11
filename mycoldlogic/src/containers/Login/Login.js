import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RequestPassword from './RequestPassword/RequestPassword';
import Header from '../../components/Header/Header';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestPassword: false,
      error: false
    };
  }
  requestPass = () => {
    this.setState({requestPassword: true});
  }
  authenticateUser = () => {
    // send API call out to authenticate user
    // send authenticated user data back to App Component via prop.
    
    // axios.get('https://mycoldlogiccatest.azurewebsites.net/api/Login/Associates', {
    //   headers: {
    //   'Access-Control-Allow-Origin': '*',
    // }})
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    this.props.logUserIn();
  }
  render(){
    let login = (
      <LoginForm
        togglePasswordRequest={this.requestPass}
        authenticateUser={this.authenticateUser}
        />);
    if(this.state.requestPassword){
      login = <RequestPassword />
    }
    return(
      <div>
        <Header />
        {login}
      </div>
    );
  }
}

export default Login;
