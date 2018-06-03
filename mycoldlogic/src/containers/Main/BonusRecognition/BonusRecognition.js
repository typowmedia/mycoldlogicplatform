import React, { Component } from 'react';
import axios from 'axios';

import './BonusRecognition.css';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';
import Spinner from '../../../components/UI/Spinner/Spinner';
import TableView from './TableView/TableView';
import ListView from './ListView/ListView';

class BonusRecognition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recognitions: [],
      loading: true,
      error: false,
      mobileVersion: false
    };
  }

  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));

    axios.get('/EpIncentives/1')
    .then(res => {
      const recognitions = [res.data];
      this.setState({recognitions: recognitions, loading: false});
    })
    .catch(err => {
      this.setState({error: true});
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  updateDimensions() {
    if(window.innerWidth < 900) {
      if (!this.state.mobileVersion) {
        this.setState({mobileVersion: true});
      }
    }
    if (window.innerWidth > 900) {
      if (this.state.mobileVersion) {
        this.setState({mobileVersion: false})
      }
    }
  }


  render(){

    let recognitionTable = <TableView recognitions={this.state.recognitions} />

    if (this.state.mobileVersion) {

      recognitionTable = <ListView recognitions={this.state.recognitions} />

    }

    if (this.state.loading) {

      recognitionTable = <Spinner />

    }

    return(

      <div className='BonusRecognition'>
        <div>
          <Subtitle
          icon='bonus-recognitions'
          height='70px'
          title='Bonus Recognitions'
          />
        </div>

        <p>Hi {this.props.user.firstName}, your bonus recognitions for the next weeks are:</p>

        {recognitionTable}

        <BackToDashboard />

      </div>

    );
  }
}

export default BonusRecognition;
