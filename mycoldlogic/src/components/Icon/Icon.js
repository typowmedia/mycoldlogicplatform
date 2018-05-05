import React from 'react';
import TimeOffIcon from '../../assets/time_off_icon.svg';
import BestSiteIcon from '../../assets/my_best_site_icon.svg';
import OpenPositionIcon from '../../assets/open_positions_icon.svg';
import SafeSiteIcon from '../../assets/safe_site_report_icon.svg';
import BonusRecognitionsIcon from '../../assets/bonus_recognitions_icon.svg';
import ScheduleIcon from '../../assets/schedule_icon.svg';
import RequestPasswordIcon from '../../assets/request_a_password_icon.svg';


const Icon = ( props ) => {
  const height = props.height;
  let icon = null;
  switch (props.icon) {
    case 'timeoff':
      icon = TimeOffIcon;
      break;
    case 'bonus-recognitions':
      icon = BonusRecognitionsIcon;
      break;
    case 'my-schedule':
      icon = ScheduleIcon;
      break;
    case 'my-best-site-report':
      icon = BestSiteIcon;
      break;
    case 'safe-site-report':
      icon = SafeSiteIcon;
      break;
    case 'open-positions':
      icon = OpenPositionIcon;
      break;
    case 'request-password':
      icon = RequestPasswordIcon;
      break;
    default: icon = null;

  }
  return (
    <img height={height} src={icon} alt=""></img>
  );
};

export default Icon;
