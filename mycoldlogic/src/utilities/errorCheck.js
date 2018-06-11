const errorCheck = (error) => {
    let err;
    switch (error) {
      case 'manager':
      err = {
        message: 'Please choose a manager to ask a question.',
        type: error
      };
      break;

      case 'subject':
      err = {
        message: 'Please enter a subject.',
        type: error
      };
      break;

      case 'fromDate':
      err = {
        message: 'Please select a start date.',
        type: error
      };
      break;

      case 'toDate':
      err = {
        message: 'Please select an end date.',
        type: error
      };
      break;

      case 'reason':
      err = {
        message: 'Please select a reason in the dropdown menu.',
        type: error
      };
      break;

      case 'incidentDate':
      err = {
        message: 'Please select a date.',
        type: error
      };
      break;

      case 'incidentLocation':
      err = {
        message: 'Please enter a location.',
        type: error
      };
      break;

      case 'message':
      err = {
        message: 'Please enter a message before sending.',
        type: error
      };
      break;

      case 'selectedPositions':
      err = {
        message: 'You must select at least one position and no more than five. Please double check your selections',
        type: error
      };
      break;     

      case 'pastDate':
      err = {
        message: 'The date you selected has already passed',
        type: 'fromDate'
      };
      break;

      case 'pastToDate':
      err = {
        message: 'The date you selected has already passed',
        type: 'toDate'
      };
      break;

      case 'mySuggestion':
      err = {
        message: 'You must enter a suggestion before submitting.',
        type: error
      };
      break;

      case 'suggestionImprovement':
      err = {
        message: 'Please provide more information on what your suggestion will improve.',
        type: error
      };
      break;

      case 'reasons':
      err = {
        message: 'You must select atleast one checkbox to continue.',
        type: error
      };
      break;

      case 'other':
      err = {
        message: 'You must provide a reason when selecting "other"',
        type: error
      };
      break;

      default: err = false;
    }
    return err;
};

export {
  errorCheck
}
