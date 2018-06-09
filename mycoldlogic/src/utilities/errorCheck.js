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
      
      default: err = false;
    }
    return err;
};

const dateCheck = (fromDate, toDate) => {
  let fDate = new Date(fromDate).getTime();
  fDate = new Date(fDate).getTime() + new Date(fDate).getTimezoneOffset();
  const tDate = new Date(toDate).getTime();
  const todayDate = new Date().getTime();

  console.log('[FROMDATE]', new Date(fromDate).getTime());
  console.log('[FROMDATE + TIMEZONE]', fDate);
  console.log('[FROMDATE + TIMEZONE LOGGED]', new Date(fDate));
  console.log('[TODATE]', tDate);
  console.log('[TODAYDATE]', todayDate);

  var offset = new Date().getTimezoneOffset();
  console.log(offset);
    return {
      message: 'Wrong date',
      type: 'fromDate'
    };
};


export {
  errorCheck,
  dateCheck
}
