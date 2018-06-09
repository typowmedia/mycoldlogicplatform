import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RequestPassword from './RequestPassword/RequestPassword';
import Header from '../../components/Header/Header';
//import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestPassword: false,
      passwordRequestSent: false,
      username: '',
      password: ''
    };
  }

    requestPass = (event) => {
      event.preventDefault();
      this.setState({requestPassword: true, password: ''});
    }

    requestPassword = (event) => {
      event.preventDefault();
      // send request off for user Password
      this.setState({
        passwordRequestSent: true
      }, () => {
        setTimeout(() => {
          this.setState(
            prevState => ({
              passwordRequestSent: !prevState.passwordRequestSent,
              requestPassword: false,
              username: '',
              password: ''
            }));
        }, 3000)
      });
    };
    usernameChangeHandler = event => {
      this.setState({username: event.target.value});
    };

    userPasswordChangeHandler = event => {
      this.setState({password: event.target.value});
    }

    authenticateUser = () => {
      // axios.get('https://mycoldlogicca.azurewebsites.net/api/Login/Associates')
      // .then((result) => {
      //   console.log(result.data[0]);
      //   this.props.logUserIn(result.data[0]);
      // })
      // .catch((err) => {
      //   console.log(err);
      // })

      this.props.logUserIn();
    }

  render(){
    return(
      <div className="login">
        <div style={{width: '100%', background: '#0D3C55'}}>
          <Header />
        </div>
        {
          !this.state.requestPassword
          ? (
              <LoginForm
                togglePasswordRequest={this.requestPass}
                authenticateUser={this.authenticateUser}
                changeUsername={this.usernameChangeHandler}
                changePassword={this.userPasswordChangeHandler}
                username={this.state.username}
              />
            )
          : (
              <RequestPassword
                changeUsername={this.usernameChangeHandler}
                username={this.state.username}
                clicked={this.requestPassword}
                requestPass={this.state.requestPassword}
                requestSent={this.state.passwordRequestSent}
              />
            )
        }
      </div>
    );
  }
}

export default Login;
