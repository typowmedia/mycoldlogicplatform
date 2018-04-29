import React, { Component } from 'react';
import TimeoffRequestForm from './TimeoffRequestForm/TimeoffRequestForm';
import Subtitle from '../Subtitle/Subtitle';
import './Timeoff.css';

class Timeoff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reasonDetail: '',
      requestSubmitted: false
    };
    this.updateReason = this.updateReason.bind(this);
    this.submitTimeoffRequest = this.submitTimeoffRequest.bind(this);
  }
  updateReason = (event) => {
    let reasonText = event.target.value;
    this.setState({reasonDetail: reasonText});
  }
  submitTimeoffRequest = (event) => {
    event.preventDefault();
    this.setState=(prevState => ({requestSubmitted: !prevState.requestSubmitted}))
  }
  render(){
    let timeoff = (<TimeoffRequestForm
      updateReason={this.updateReason}
      submitTimeoffRequest={this.submitTimeoffRequest}
       />);
    if(this.state.requestSubmitted){
      timeoff = (
        <div>
          <p>
            Thank you for submitting your time off request through your ColdLogic portal. One of your managers will review the request and get back to you soon with an answer.
          </p>
          <div>
            <button>Submit another request</button>
            <button>Back to Dashboard</button>
          </div>
        </div>
      )
    }
    return(
      <div className='Timeoff'>
        <Subtitle height='70px' icon={this.props.navLinks[0]} title='Time Off Request' />
        {timeoff}
      </div>
    );
  }
}

export default Timeoff;
