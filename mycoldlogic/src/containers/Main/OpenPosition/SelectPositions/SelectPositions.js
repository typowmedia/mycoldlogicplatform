import React from 'react';
import _ from 'lodash';
import './SelectPositions.css';

const SelectPositions = ( props ) => {
  const positions = props.positions.map((checkbox, index) => {
    let checked = false;
    if (_.includes(props.selected, checkbox)) {
      checked = true;
    }
    return (
      <div key={checkbox.id}>
        <input
          type='checkbox'
          id={checkbox.id}
          value={checkbox.position}
          onChange={props.changed}
          checked={checked}
          />
        <label htmlFor={checkbox.id}>{checkbox.position}</label>
      </div>
    )
  });
  return (
      <div className='SelectPositions'>

        {positions}

      </div>
  );
};

export default SelectPositions;
