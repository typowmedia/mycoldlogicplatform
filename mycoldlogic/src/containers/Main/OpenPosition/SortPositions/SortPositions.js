import React from 'react';
import './SortPositions.css';



const SortPositions = ( props ) => {
  const positions = props.selected.map((item, index) => {
    return (
      <li
        id={index}
        key={item.id}
        onDragStart={props.dragStart}
        draggable>
        {item.position}
      </li>
    )
  })
  return (
    <ul className='SortPositions'>
      {positions}
    </ul>
  );
};


export default SortPositions;


