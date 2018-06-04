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
  render(){
      return(
        <Wrapper>

          <SideDrawer show={this.state.showEvents} hide={this.toggleEvents}/>

          <div className='Dashboard'>

            <div className='announcements'>

              <Announcements showEvents={this.toggleEvents}/>

            </div>

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
        </Wrapper>
    );
  }
}

export default Dashboard;
