import React, { Component } from 'react';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';

import './BestSiteReport.css';

class BestSiteReport extends Component {
  render(){
    return(
      <div className='BestSiteReport'>
        <Subtitle icon='my-best-site-report' height='70px' title='Best Site Report'/>
        <BackToDashboard />
      </div>
    );
  }
}

export default BestSiteReport;
