import React, { Component } from 'react';
import './Dashboard.css';
import Announcements from '../Announcements/Announcements';
import Nav from '../Nav/Nav';
import AskManagerForm from './AskManagerForm/AskManagerForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }
  render(){
    return(
      <div>
        <Announcements />
        <div className='Dashboard-flex-container'>
          <Nav navLinks={this.props.navLinks}/>
          <AskManagerForm />
        </div>
      </div>
    );
  }
}

export default Dashboard;
