import React, { Component } from 'react';
import './Timeoff.css';

import TimeoffRequestForm from './TimeoffRequestForm/TimeoffRequestForm';
import RequestSuccess from '../../../components/Requests/RequestSuccess/RequestSuccess';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import Spinner from '../../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../../components/Requests/ErrorMessage/ErrorMessage';

import { errorCheck } from '../../../utilities/errorCheck';
import axios from 'axios';


class Timeoff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestDate: '',
      reason: '',
      message: '',
      toDate: '',
      fromDate: '',
      requestSubmitted: false,
      error: '',
      timeOffReasons: null,
      loading: true
    };
  }

  // LIFECYCLES
  componentDidMount(){
    let todaysDate = new Date();
    todaysDate.setHours(0,0,0,0);
    axios.get('/TimeOffReasons')
      .then(results => {
        this.setState({
          timeOffReasons: results.data, 
          loading: false,
          requestDate: todaysDate
        });
      });
    
  }

  render(){
    let timeOff = <Spinner />
    if (!this.state.loading) {
      timeOff = (
        <TimeoffRequestForm
          errorMessage={this.state.error}
          updateReason={this.updateReason}
          timeoffReasons={this.state.timeOffReasons}
          fromDate={this.updateFromDate}
          toDate={this.updateToDate}
          updateMessage={this.updateMessage}
          submitTimeoffRequest={this.submitTimeoffRequest}
          message={this.state.message}
          closeError={this.closeError}
        />
      )
    if (this.state.requestSubmitted) {
      timeOff = (
        <RequestSuccess
          successMessage='Thank you for submitting your time off request through your ColdLogic portal. One of your managers will review the request and get back to you soon with an answer.'
          clicked={this.submitAnotherTimeoffRequest}
          />
      )
    }
    }
    return(
      <div className='Timeoff'>
      <div className='Timeoff-subtitle'>
        <Subtitle height='70px' icon={'timeoff'} title='Time Off Request' />
        <div className='Timeoff-error'>
        {
          this.state.error
          ? <ErrorMessage message={this.state.error.message} clicked={this.closeError}/>
          : null
        }
        </div>
      </div>
        {timeOff}
      </div>
    );
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
    let chosenDate = event.target.value;
    chosenDate = chosenDate.split('-');
    const date = new Date(chosenDate.join(','))
    this.setState({fromDate: date, error: ''});
  };
  updateToDate = (event) => {
    let chosenDate = event.target.value;
    chosenDate = chosenDate.split('-');
    const date = new Date(chosenDate.join(','))
    this.setState({toDate: date, error: ''});
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
    if (this.state.fromDate === '') {
      error = errorCheck('fromDate')
    } else if (this.state.toDate === '') {
      error = errorCheck('toDate')
    } else if (this.state.reason === '') {
      error = errorCheck('reason')
    } else if (this.state.message === '') {
      error = errorCheck('message')
    } else if (Date.parse(this.state.requestDate) > Date.parse(this.state.fromDate)) {
      error = errorCheck('pastDate')
    } else if (Date.parse(this.state.requestDate) > Date.parse(this.state.toDate)) {
      error = errorCheck('pastToDate')
    }
    if (error) {
      this.setState({error: error});
    } else {
      const report = {
        reason: this.state.reason,
        startDate: this.state.fromDate,
        endDate: this.state.toDate,
        message: this.state.message
      }
      // SEND MESSAGE
      console.log(report);
      this.setState(prevState => ({requestSubmitted: !prevState.requestSubmitted, error: ''}))
    }
  };
}

export default Timeoff;
