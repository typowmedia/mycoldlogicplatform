import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Announcements from './Announcements/Announcements';
import Nav from './Nav/Nav';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }
  render(){
    return(
      <Auxiliary>
        <Announcements>
          <div><h3>Important Announcement 1</h3></div>
          <div>
            <h3>Upcoming Events</h3>
            <div>
              <span>DEC 01</span>
              <span>Christmas BBQ Grab your hotdog!</span>
            </div>
          </div>
        </Announcements>
        <Nav navLinks={this.props.navLinks}/>
      </Auxiliary>
    );
  }
}

export default Dashboard;
