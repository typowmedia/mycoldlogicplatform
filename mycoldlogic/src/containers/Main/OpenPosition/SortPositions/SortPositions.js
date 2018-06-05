import React from 'react';
import './SortPositions.css';



const SortPositions = ( props ) => {
  const positions = props.selected.map((item, index) => {
    return (
      <li
        key={item.id}
        onDrag={props.dragStart}
        onDragExit{}
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
