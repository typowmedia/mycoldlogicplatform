import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
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
      <Aux>
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
      </Aux>
    );
  }
}

export default Dashboard;
