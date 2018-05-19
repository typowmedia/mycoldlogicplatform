import React, { Component } from 'react';
import './Dashboard.css';
import Announcements from '../../components/Announcements/Announcements';
import Nav from '../../components/Nav/Nav';
import AskManagerForm from './AskManagerForm/AskManagerForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: {}
    };
  }

  componentDidMount(){
    // INITIAL ANNCOUNCEMENT PULL FROM API
    // ADD EVENT LISTENER FOR POSSIBLE UPDATES FOR ANNCOUNCEMENTS??
  }
  componentWillUnmount(){
    //REMOVE EVENT LISTENER IF ADDED
  }
  render(){
      return(
        <div>
          <Announcements />
          <div className='Dashboard-flex-container'>
            <div className='Dashboard-nav-container'>
              <Nav navLinks={this.props.navLinks}/>
            </div>
            <div className='Dashboard-form-container'>
              <AskManagerForm
                selectManager={this.selectManager}
                updateSubject={this.updateSubject}
                updateMessage={this.updateMessage}
                />
            </div>
          </div>
        </div>
    );
  }
}

export default Dashboard;
