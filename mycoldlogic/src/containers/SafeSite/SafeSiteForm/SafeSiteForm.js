import React from 'react';
import BackToDashboard from '../../../components/BackToDashboard/BackToDashboard';

const SafeSiteForm = ( props ) => {
  return (
    <div>
      <form>
        <div>
          When did it happen?
          <input type='date'/>
        </div>
        <div>
          Where did it happen?
          <input type='text'/>
        </div>
        <div>
          Please give more detail below
          <textarea></textarea>
        </div>
      </form>
      <div>
        <BackToDashboard />
        <button onClick={props.submitForm}>Submit</button>
      </div>
    </div>
  );
};

export default SafeSiteForm;
