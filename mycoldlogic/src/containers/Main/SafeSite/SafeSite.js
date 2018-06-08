import React, { Component } from 'react';
import './SafeSite.css';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import SafeSiteForm from './SafeSiteForm/SafeSiteForm';
import RequestSuccess from '../../../components/Requests/RequestSuccess/RequestSuccess';
import { errorCheck } from '../../../utilities/errorCheck';

class SafeSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startReport: false,
      formSubmitted: false,
      incidentDate: '',
      incidentLocation: '',
      message: '',
      error: ''
    };
  }

  updateDate = (event) => {
    this.setState({
      incidentDate: event.target.value,
      error: ''
    });
  };
  updateLocation = (event) => {
    this.setState({
      incidentLocation: event.target.value,
      error: ''
    });
  };
  updateMessage = (event) => {
    this.setState({
      message: event.target.value,
      error: ''
    });
  };
  submitForm = (event) => {
    let error;
    event.preventDefault();
    if (this.state.incidentDate === '') {
      error = errorCheck('incidentDate')
    } else if (this.state.incidentLocation === '') {
      error = errorCheck('incidentLocation')
    } else if (this.state.message === '') {
      error = errorCheck('message')
    };
    if (error) {
      this.setState({error: error});
    } else {
      // SEND MESSAGE
      console.log(this.state.incidentDate, this.state.incidentLocation, this.state.message);
      this.setState(prevState => ({
        formSubmitted: !prevState.formSubmitted,
        error: ''
      }));
    }
  }
  submitAnotherForm = () => {
    this.setState( prevState => ({
      formSubmitted: !prevState.formSubmitted,
      incidentDate: '',
      incidentLocation: '',
      message: ''
    }));
  };

  clearError  = () => {
    this.setState({error: ''});
  };
  render(){
    let safeSite = (
      <div className="initial-message">
        <p>It is our responsibilty to report any concern about safety, this helps us to keep our facilities safe and our work free of concerns</p>
        <button
          className='mainBtn'
          onClick={() => this.setState({startReport: true})}
          >
          Start my Report
        </button>
      </div>
    )
    if (this.state.startReport){
      safeSite = (
        <SafeSiteForm
          submitForm={this.submitForm}
          submitAnotherForm={this.submitAnotherForm}
          updateMessage={this.updateMessage}
          updateLocation={this.updateLocation}
          updateDate={this.updateDate}
          errorMessage={this.state.error}
          closeError={this.clearError}
          message={this.state.message}
          incidentDate={this.state.incidentDate}
          incidentLocation={this.state.incidentLocation}
          />
      );
    }
    if(this.state.startReport && this.state.formSubmitted){
      safeSite = (
        <RequestSuccess
          clicked={this.submitAnotherForm}
          successMessage='Thank you for helping us keep our workplace safe for everyone and creating this report through your ColdLogic portal. This report will be carefully investigated'
          />
      )
    }
      return <div className='SafeSite'>
          <div>
              <Subtitle
                  title='Safe Site Report'
                  icon='safe-site-report'
                  height='70px'
              />
              {safeSite}
          </div>
      </div>;
  }
}

export default SafeSite;
