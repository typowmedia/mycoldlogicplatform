import React from 'react';

import TimeOffIcon from '../../assets/TimeOffIcon';
import BestSiteIcon from '../../assets/MyBestSiteIcon';
import OpenPositionIcon from '../../assets/OpenPositionIcon';
import SafeSiteIcon from '../../assets/SafeSiteIcon';
import BonusRecognitionsIcon from '../../assets/BonusRecognitionsIcon';
import ScheduleIcon from '../../assets/ScheduleIcon';
import RequestPasswordIcon from '../../assets/RequestPasswordIcon';


const Icon = ( props ) => {
  let icon = null;
  switch (props.icon) {
    case 'timeoff':
      icon = <TimeOffIcon color='#FFF' />
      break;

    case 'bonus-recognitions':
      icon = <BonusRecognitionsIcon color='#FFF' />;
break;
    case 'my-schedule':
      icon = <ScheduleIcon color='#FFF' />;
break;
    case 'my-best-site-report':
      icon = <BestSiteIcon color='#FFF' />;
break;
    case 'safe-site-report':
      icon = <SafeSiteIcon color='#FFF' />;

    case 'open-positions':
      icon = <OpenPositionIcon color='#FFF' />;
break;
    case 'request-password':
      icon = <RequestPasswordIcon color='#FFF' />;
break;
    default: icon = null;

  }
  return (
    <div style={{height: `${props.height}`, width: `${props.height}`}}>
        {icon}
    </div>
  )
};

export default Icon;
