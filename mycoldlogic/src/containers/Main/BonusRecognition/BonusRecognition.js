import React, { Component } from 'react';
import axios from 'axios';

import './BonusRecognition.css';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';
import Spinner from '../../../components/UI/Spinner/Spinner';
import TableRow from './TableRow/TableRow';

class BonusRecognition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recognitions: [],
      loading: true,
      error: false
    };
  }

  componentDidMount(){
    axios.get('http://mycoldlogicca.azurewebsites.net/api/Incentives/EpIncentives/1')
    .then(res => {
      const recognitions = [res.data];
      this.setState({recognitions: recognitions, loading: false});
    })
    .catch(err => {
      this.setState({error: true});
    });
    window.on('resize', this.handleResize());
  }

  handleResize = (event) => {
    console.log(event);
  };


  render(){
    const recognitions = this.state.recognitions.map(week => {
      return <TableRow key={week.id} recognition={week} />
    });

    let recognitionTable = (
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
    );
    if (this.state.mobileVersion) {
      recognitionTable = (
        <div>
          Mobile Version
        </div>
      )
    }
    if (this.state.loading) {
      recognitionTable = <Spinner />
    }
    return(
      <div className='BonusRecognition'>
        <Subtitle
          icon='bonus-recognitions'
          height='70px'
          title='Bonus Recognitions'
          />
        <p>Hi {this.props.user.firstName}, your bonus recognitions for the next weeks are:</p>
        {recognitionTable}
        <BackToDashboard />
      </div>
    );
  }
}

export default BonusRecognition;
