import React, { Component } from 'react';
import _ from 'lodash';

import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import RequestSuccess from '../../../components/Requests/RequestSuccess/RequestSuccess';
import BestSiteForm from './BestSiteForm/BestSiteForm';
// import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';

import './BestSiteReport.css';

class BestSiteReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startSuggestion: true,
      reportSubmitted: false,
      mySuggestion: '',
      suggestionImprovement: '',
      checkboxReasons: [],
      otherSuggestion: '',
      otherSuggestionBoolean: false,
    };
  }
  suggestionHandler = (event) => {
    this.setState({mySuggestion: event.target.value});
  };
  suggestionImprovementHandler = (event) => {
    this.setState({suggestionImprovement: event.target.value});
  };
  checkboxHandler = (event) => {
    let updatedArr;
    let otherVal = this.state.otherSuggestionBoolean;
    let checkboxVal = event.target.value;
    const checkboxArr = [...this.state.checkboxReasons];
    const checkboxIndex = _.indexOf(checkboxArr, checkboxVal);

    if (checkboxVal === 'Other:') {
      otherVal = !otherVal;
    }
    if ( checkboxIndex === -1) {
      updatedArr = [...checkboxArr, checkboxVal];
    } else {
      updatedArr = _.pull(checkboxArr, checkboxVal);
    }
    this.setState({
      checkboxReasons: updatedArr,
      otherSuggestionBoolean: otherVal,
      otherSuggestion: otherVal ? this.state.otherSuggestion : ''
    });
  };
  otherReasonFieldHandler = (event) => {
    this.setState({otherSuggestion: event.target.value});
  };
  submitReport = () => {
    // ERROR REPORTS STILL TO DO
    let updatedArr = [...this.state.checkboxReasons]
    let otherIndex = _.indexOf(updatedArr, 'Other:');
    if ( otherIndex !== -1) {
      const arr = updatedArr;
      const other = arr[otherIndex] + " " + this.state.otherSuggestion;
      updatedArr = arr.map((item, index) => {
        if (index === otherIndex) {
          return other;
        }
        return item;
      });
    }
    let report = {
      suggestion: this.state.mySuggestion,
      improvementVal: this.state.suggestionImprovement,
      reasons: updatedArr
    }
    console.log(report); // THIS WILL BE REPLACE WITH POST METHOD TO API
    this.setState({
      reportSubmitted: true,
      mySuggestion: '',
      suggestionImprovement: '',
      checkboxReasons: [],
      otherSuggestion: '',
      otherSuggestionBoolean: false,
    });
  };
  submitNewSiteReport = () => {
    this.setState({
      reportSubmitted: false
    });
  };
  render(){
    let bestSite = (
      <div className="Best-Site-initial-message">
        <p>We would like to recognize and share your suggestions that improve our organization.</p>
        <p>Please note that your full name will be taken so that we can acknowledge you and include you in discussions of your great idea!</p>
        <button
          className='mainBtn'
          onClick={() => this.setState({startSuggestion: true})}
          >
          Start my Report
        </button>
      </div>
    )
    if (this.state.startSuggestion) {
      bestSite = (
        <BestSiteForm
          clicked={this.submitReport}
          changed={(event) => this.checkboxHandler(event)}
          otherSuggestionChanged={this.otherReasonFieldHandler}
          otherSuggestion={this.state.otherSuggestion}
          other={this.state.otherSuggestionBoolean}
          mySuggestion={(event) => this.suggestionHandler(event)}
          mySuggestionImprovement={(event) => this.suggestionImprovementHandler(event)}
          mySuggestionValue={this.state.mySuggestion}
          mySuggestionImprovementValue={this.state.suggestionImprovement}
        />
      )
    }
    if (this.state.startSuggestion && this.state.reportSubmitted) {
      bestSite = (
        <RequestSuccess
          successMessage='Thank you for using the ColdLogic portal to help us improve your workplace. Your suggestion will be reviewed shortly.'
          clicked={this.submitNewSiteReport}
        />
      )
    }
    return(
      <div className='BestSiteReport'>
        <Subtitle icon='best-site-report' height='70px' title='Best Site Report'/>
        {bestSite}
      </div>
    );
  }
}

export default BestSiteReport;
