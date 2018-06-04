import React from 'react';

const SelectPositions = ( props ) => {
  const positions = props.positions.map((checkbox, index) => {
    return (
      <div key={checkbox.id}>
        <input
          type='checkbox'
          id={checkbox.id}
          value={checkbox.position}
          onChange={props.changed}
          />
        <label htmlFor={checkbox.id}>{checkbox.position}</label>
      </div>
    )
  });
  return (
    <form>
      <div>
        {positions}
      </div>
    </form>
  );
};

export default SelectPositions;
