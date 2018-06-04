import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Events from '../../Events/Events';

import './SideDrawer.css';

const SideDrawer = ( props ) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.show) {
    attachedClasses = ['SideDrawer', 'Open'];
  }
  return (
    <Wrapper>
      <Backdrop show={props.show} clicked={props.hide}/>
      <Events className={attachedClasses.join(' ')} />
    </Wrapper>
  );
};

export default SideDrawer;
