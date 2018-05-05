import React, { Component } from 'react';
import './Dashboard.css';
import Announcements from '../../components/Announcements/Announcements';
import Nav from '../../components/Nav/Nav';
import AskManagerForm from './AskManagerForm/AskManagerForm';
import ColdLogicLogo from '../../assets/ColdLogicLogo';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }
  render(){
      return(<div>
          <Announcements/>
          <div className='Dashboard-flex-container'>
              <Nav navLinks={this.props.navLinks}/>
              <AskManagerForm/>
              <ColdLogicLogo color={'#FEE222'} alt="Look Cody, no hands man!"/>
              <ColdLogicLogo color={'#F222EE'}/>
          </div>
      </div>);
  }
}

export default Dashboard;
