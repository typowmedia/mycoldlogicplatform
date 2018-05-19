import React from 'react';
import './Icon.css';

import TimeOffIcon from '../../assets/TimeOffIcon';
import BestSiteIcon from '../../assets/MyBestSiteIcon';
import OpenPositionIcon from '../../assets/OpenPositionIcon';
import SafeSiteIcon from '../../assets/SafeSiteIcon';
import BonusRecognitionsIcon from '../../assets/BonusRecognitionsIcon';
import ScheduleIcon from '../../assets/ScheduleIcon';
import RequestPasswordIcon from '../../assets/RequestPasswordIcon';


const Icon = ( props ) => {
  let icon;
  switch (props.icon) {
    case 'timeoff':
      icon = <TimeOffIcon color={props.color}/>;
      break;
    case 'bonus-recognitions':
      icon = <BonusRecognitionsIcon color={props.color} />;
      break;
    case 'my-schedule':
      icon = <ScheduleIcon color={props.color} />;
      break;
    case 'my-best-site-report':
      icon = <BestSiteIcon color={props.color} />;
      break;
    case 'safe-site-report':
      icon = <SafeSiteIcon color={props.color} />;
      break;
    case 'open-positions':
      icon = <OpenPositionIcon color={props.color} />;
      break;
    case 'request-password':
      icon = <RequestPasswordIcon color={props.color} />;
      break;
    default: icon = null;

  }
  return (
    <div style={{height: `${props.size}`, width: `${props.size}`}}>
        {icon}
    </div>
  )
};

export default Icon;
