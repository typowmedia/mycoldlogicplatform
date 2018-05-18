import React from 'react';
import BackToDashboard from '../../../components/BackToDashboard/BackToDashboard';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const SafeSiteForm = ( props ) => {
  return (
    <div>
      {props.errorMessage ? <ErrorMessage message={props.errorMessage.message} clicked={props.closeError}/> : null}
      <form>
        <div>
          When did it happen?
          <input
            type='date'
            onChange={props.updateDate}
            style={props.errorMessage.type === 'incidentDate' ? {border: '1px solid red'} : null}
            value={props.incidentDate}
            />
        </div>
        <div>
          Where did it happen?
          <input
            type='text'
            onChange={props.updateLocation}
            style={props.errorMessage.type === 'incidentLocation' ? {border: '1px solid red'} : null}
            value={props.incidentLocation}
            />
        </div>
        <div>
          Please give more detail below
          <textarea
            rows='4'
            onChange={props.updateMessage}
            style={props.errorMessage.type === 'message' ? {border: '1px solid red'} : null}
            value={props.message}
            />
        </div>
        <div>
          <BackToDashboard />
          <button onClick={props.submitForm}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SafeSiteForm;
