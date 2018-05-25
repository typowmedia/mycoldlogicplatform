import React, { Component } from 'react';
import axios from 'axios';

import './BonusRecognition.css';
import Subtitle from '../../components/Subtitle/Subtitle';
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard';
import Spinner from '../../components/Spinner/Spinner';

class BonusRecognition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recognitions: '',
      loading: true
    };
  }

  componentDidMount(){
    axios.get('http://mycoldlogicca.azurewebsites.net/api/Incentives/EpIncentives/1')
    .then(res => console.log(res.data))
    .catch(err => console.log(err.data));
  }


  render(){
    const recognitions = this.state.recognitions;
    // <tr>
    //   <td>Sat 07-Apr-2018</td>
    //   <td>$14.73</td>
    //   <td>$17.02</td>
    //   <td>$31.75</td>
    //   <td>100%</td>
    //   <td>$31.75</td>
    // </tr>
    return(
      <div className='BonusRecognition'>
        <Subtitle
          icon='bonus-recognitions'
          height='70px'
          title='Bonus Recognitions'
          />
        <p>Hi {this.props.user.firstName}, your bonus recognition for the next weeks are:</p>
        {
          this.state.loading
          ? <Spinner />
          : (
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
                {recognitions}
              </tbody>
            </table>
            )
        }
        <BackToDashboard />
      </div>
    );
  }
}

export default BonusRecognition;
