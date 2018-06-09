import React from 'react';
import './Sort-SubmitPositions.css';


const SortSubmitPositions = ( props ) => {
  const positions = props.selected.map((item, index) => {
    return (
      <div className='SortPositions' key={item.id}>
        {'#' + ( index + 1)} Choice:
        <li
          className={props.step === 1 ? 'sortable' : 'unsortable'}
          id={index}
          onDragStart={props.dragStart}
          onDragOver={event => event.preventDefault()}
          onDragEnd={props.dragEnd}
          onDrop={props.drop}
          draggable={props.step === 1}>

            {item.position}

        </li>
      </div>
    )
  })
  const submitMessage = props.step === 1 
  ? null 
  : <p className='lastStep'> Please confirm your selection and submit it. <br/> You will be awarded your top available selection in seniority order. </p>
  return (
    <ol>
      {submitMessage}
      {positions}
    </ol>
  );
};


export default SortSubmitPositions;


