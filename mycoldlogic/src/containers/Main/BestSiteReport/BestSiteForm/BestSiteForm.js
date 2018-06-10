import React from 'react';
import Wrapper from '../../../../hoc/Wrapper/Wrapper';
import BackToDashboard from '../../../../components/UI/BackToDashboard/BackToDashboard';

const checkboxes = [
  'Make work more fun or interesting',
  'Improve safe operations',
  'Make the job easier',
  'Make people feel more appreciated',
  'Make people want to work for us for a long time',
  'Save the company money',
  'Keep the equipment in better condition',
  'Improve accurate order selection and/or deliver to Sobeys',
  'Other:'
];



const BestSiteForm = ( props ) => {
  
  const errorType = props.error.type;
  
  const checkbox = checkboxes.map((checkbox, index) => {
    let other;
    if (index === checkboxes.length - 1 && props.other) {
      other = (
        <input
          style={{borderColor: errorType === 'other' ? 'red' : null}}
          type='text'
          onChange={props.otherSuggestionChanged}
          value={props.otherSuggestion}/>);
    }
    return (
      <div key={checkbox}>
        <input type='checkbox' id={index} value={checkbox} onChange={props.changed}/>
        <label htmlFor={index}>{checkbox}{other}</label>
      </div>
    )
  });
  return (
    <Wrapper>
      <form>
        <div>
          <div>
            <p>My suggestion is:</p>
            <textarea
              style={{borderColor: errorType === 'mySuggestion' ? 'red' : null}}
              rows='8'
              value={props.mySuggestionValue}
              onChange={props.mySuggestion}
              />
          </div>

          <div>
            <p>This will make ColdLogic the best site by:</p>
            <textarea
              style={{borderColor: errorType === 'suggestionImprovement' ? 'red' : null}}
              rows='8'
              value={props.mySuggestionImprovementValue}
              onChange={props.mySuggestionImprovement}/>
          </div>
        </div>

        <div>
          <h3>This suggestion has the potential to:</h3>
          {checkbox}
        </div>
      </form>
      <div className='BestSiteReport-buttons'>
        <BackToDashboard />
        <button className='mainBtn' onClick={props.clicked}>Submit</button>
      </div>
    </Wrapper>
  );
};

export default BestSiteForm;
