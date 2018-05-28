import React from 'react';
import './NavLink.css';
import { Link } from 'react-router-dom';
import Icon from '../../../../../components/Icon/Icon';


const NavLink = ( props ) => {
  let name;
  switch (props.route) {
    case 'timeoff': name = 'Request Time Off';
    break;
    case 'bonus-recognitions': name = 'Bonus Recognitions';
    break;
    case 'my-schedule': name = 'My Schedule';
    break;
    case 'my-best-site-report': name = 'My Best Site Report';
    break;
    case 'safe-site-report': name = 'Safe Site Report';
    break;
    case 'open-positions': name = 'Bid for a open position';
    break;
    default: name = '';
  }
  return (
    <div className='NavLink-flex'>
      <Link to={props.route} className='NavLink'>
        <Icon icon={props.route} size='60%' color='#fff'/>
      </Link>
      <p>
        {name}
      </p>
    </div>
  );
};

export default NavLink;
