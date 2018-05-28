import React, { Component } from 'react';
import TimeoffRequestForm from './TimeoffRequestForm/TimeoffRequestForm';
import RequestSuccess from '../../../components/Requests/RequestSuccess/RequestSuccess';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import './Timeoff.css';
import { errorCheck } from '../../../utilities/errorCheck';


class Timeoff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reason: '',
      message: '',
      toDate: '',
      fromDate: '',
      requestSubmitted: false,
      error: ''
    };
  }
  submitAnotherTimeoffRequest = () => {
    this.setState(prevState => ({
      requestSubmitted: !prevState.requestSubmitted,
      reason: '',
      message: '',
      toDate: '',
      fromDate: '',
      error: ''
    }))
  };
  updateReason = (event) => {
    this.setState({reason: event.target.value, error: ''});
  };
  updateFromDate = (event) => {
    this.setState({fromDate: event.target.value, error: ''});
  };
  updateToDate = (event) => {
    this.setState({toDate: event.target.value, error: ''});
  };
  updateMessage = (event) => {
    this.setState({message: event.target.value, error: ''});
  };
  closeError = () => {
    this.setState({error: ''});
  };
  submitTimeoffRequest = (event) => {
    event.preventDefault();
    let error;
    event.preventDefault();
    if (this.state.fromDate === '') {
      error = errorCheck('fromDate')
    } else if (this.state.toDate === '') {
      error = errorCheck('toDate')
    } else if (this.state.reason === '') {
      error = errorCheck('reason')
    } else if (this.state.message === '') {
      error = errorCheck('message')
    };;
    if (error) {
      this.setState({error: error});
    } else {
      // SEND MESSAGE
      console.log(this.state.reason, this.state.toDate, this.state.fromDate, this.state.message);
      this.setState(prevState => ({requestSubmitted: !prevState.requestSubmitted, error: ''}))
    }
  };
  render(){
    return(
      <div className='Timeoff'>
        <Subtitle height='70px' icon={this.props.navLinks[0]} title='Time Off Request' />
        {
          this.state.requestSubmitted
          ?
          (
            <RequestSuccess
              successMessage='Thank you for submitting your time off request through your ColdLogic portal. One of your managers will review the request and get back to you soon with an answer.'
              clicked={this.submitAnotherTimeoffRequest}
              />
          )
          :
          (
            <TimeoffRequestForm
              errorMessage={this.state.error}
              updateReason={this.updateReason}
              fromDate={this.updateFromDate}
              toDate={this.updateToDate}
              updateMessage={this.updateMessage}
              submitTimeoffRequest={this.submitTimeoffRequest}
              message={this.state.message}
              closeError={this.closeError}
            />
          )
        }
      </div>
    );
  }
}

export default Timeoff;
