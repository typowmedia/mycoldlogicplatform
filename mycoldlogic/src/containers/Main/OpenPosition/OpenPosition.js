import React, { Component } from 'react';
import './OpenPosition.css';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';
import SelectPositions from './SelectPositions/SelectPositions';
import SortPositions from './SortPositions/SortPositions';
import SubmitPositions from './SubmitPositions/SubmitPositions';

const stepList = [
  {
    step: 1,
    instructions: 'Choose up to 5 options from the below open positions'
  },
  {
    step: 2,
    instructions: 'From the open positions you chose, place them in the order you would like to bid on them'
  },
  {
    step: 3,
    instructions: 'Confirming and Submitting'
  }
]

class OpenPosition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  nextStep = () => {
    this.setState(prevState => ({step: prevState.step + 1}));
  };
  lastStep = () => {
    this.setState(prevState => ({step: prevState.step - 1}));
  };
  submitBid = () => {
    console.log('SUBMITTED');
  };
  render(){
    let openPosition = <SelectPositions />
    this.state.step === 1 ? openPosition = <SortPositions /> : null;
    this.state.step === 2 ? openPosition = <SubmitPositions /> : null;

    const backButton = this.state.step > 0
    ? <button onClick={this.lastStep}>Go Back</button>
    : <BackToDashboard />;

    return(
      <div className='OpenPosition'>
        <Subtitle icon='open-positions' title='Bid for open positions' height='70px'/>
        <div>
          <h1>Step: {stepList[this.state.step].step}</h1>
          <p>{stepList[this.state.step].instructions}</p>
        </div>
        {openPosition}
        <div>
          {backButton}
          <button
            onClick={
              this.state.step === 2
              ? this.submitBid
              : this.nextStep
            }>

            {this.state.step === 2 ? 'Submit' : 'Continue'}

          </button>
        </div>
      </div>
    );
  }
}

export default OpenPosition;
