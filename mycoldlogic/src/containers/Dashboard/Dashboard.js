import React, { Component } from 'react';
import './Dashboard.css';
import Announcements from '../../components/Announcements/Announcements';
import Nav from '../../components/Nav/Nav';
import AskManagerForm from './AskManagerForm/AskManagerForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true
    };
  }
  render(){
      return(<div>
          <Announcements/>
          <div className='Dashboard-flex-container'>
              <Nav navLinks={this.props.navLinks}/>
              <AskManagerForm/>
          </div>
      </div>);
  }
}

export default Dashboard;
