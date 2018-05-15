import React, { Component } from 'react';
import './BonusRecognition.css';
import Subtitle from '../../components/Subtitle/Subtitle';
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard';

class BonusRecognition extends Component {
  render(){
    return(
      <div className='BonusRecognition'>
        <Subtitle
          icon='bonus-recognitions'
          height='70px'
          title='Bonus Recognitions'
          />
        <p>Hi {this.props.user.name}, your bonus recognition for the next weeks are:</p>
        <table>
          <thead>
            <tr>
              <th>Week Ending Date</th>
              <th>Daily Incentives</th>
              <th>Weekly Incentives</th>
              <th>Gross Incentives</th>
              <th>BBS Factor</th>
              <th>Net Incentives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sat 07-Apr-2018</td>
              <td>$14.73</td>
              <td>$17.02</td>
              <td>$31.75</td>
              <td>100%</td>
              <td>$31.75</td>
            </tr>
            <tr>
              <td>Sat 07-Apr-2018</td>
              <td>$14.73</td>
              <td>$17.02</td>
              <td>$31.75</td>
              <td>100%</td>
              <td>$31.75</td>
            </tr>
            <tr>
              <td>Sat 07-Apr-2018</td>
              <td>$14.73</td>
              <td>$17.02</td>
              <td>$31.75</td>
              <td>100%</td>
              <td>$31.75</td>
            </tr>
            <tr>
              <td>Sat 07-Apr-2018</td>
              <td>$14.73</td>
              <td>$17.02</td>
              <td>$31.75</td>
              <td>100%</td>
              <td>$31.75</td>
            </tr>
          </tbody>
        </table>
        <BackToDashboard />
      </div>
    );
  }
}

export default BonusRecognition;
