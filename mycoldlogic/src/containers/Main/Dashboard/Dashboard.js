import React, { Component } from 'react';
import './Dashboard.css';
import Announcements from './Announcements/Announcements';
import Nav from './Nav/Nav';
import AskManagerForm from './AskManagerForm/AskManagerForm';
import SideDrawer from '../../../components/UI/SideDrawer/SideDrawer';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: {},
      showEvents: false,
      showAnnouncements: true
    };
  }

  componentDidMount(){
    // INITIAL ANNCOUNCEMENT PULL FROM API
    // ADD EVENT LISTENER FOR POSSIBLE UPDATES FOR ANNCOUNCEMENTS??
  }
  componentWillUnmount(){
    //REMOVE EVENT LISTENER IF ADDED
  }
  toggleEvents = () => {
    this.setState(prevState => ({showEvents: !prevState.showEvents}));
  }
  toggleAnnouncements = () => {
    this.setState( prevState => ({showAnnouncements: !prevState.showAnnouncements}));
  };
  render(){
      let announcementClasses = ['announcements'];
      let announcements = <Announcements showEvents={this.toggleEvents}/>;

      if (!this.state.showAnnouncements) {
        announcements = null;
        announcementClasses = ['announcements', 'announcements-height-zero'];
      }

      return(
        <Wrapper>

          <SideDrawer show={this.state.showEvents} hide={this.toggleEvents}/>

          <div className='Dashboard'>

            <div className={announcementClasses.join(' ')}>

              {announcements}
              <button onClick={this.toggleAnnouncements} id='toggleAnnouncements'>
                <i style={{
                  transform: !this.state.showAnnouncements
                  ? 'rotateZ(180deg)'
                  : null
                }}
                  className="fas fa-chevron-up"/>
              </button>

            </div>

          <div className={`Dashboard-flex-container ${!this.state.showAnnouncements ? 'padding-top' : null }`}>

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
        </Wrapper>
    );
  }
}

export default Dashboard;
