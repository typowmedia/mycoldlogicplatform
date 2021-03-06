import React, { Component } from 'react';

import './OpenPosition.css';
import _ from 'lodash';

import { errorCheck } from '../../../utilities/errorCheck';
import ErrorMessage from '../../../components/Requests/ErrorMessage/ErrorMessage';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';
import SelectPositions from './SelectPositions/SelectPositions';
import SortSubmitPositions from './Sort-SubmitPositions/Sort-SubmitPositions';

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
      openPositions: [
        {
          id: 123,
          position: 'Selector 1'
        },
        {
          id: 142,
          position: 'Selector 2'
        },
        {
          id: 2345,
          position: 'Forklift Operator'
        },
        {
          id: 3435,
          position: 'Selector 1 - Night Shift'
        },
        {
          id: 434534,
          position: 'Selector 2 - Day Shift'
        },
        {
          id: 5543,
          position: 'Other amazing position'
        },
        {
          id: 6435,
          position: 'Superman with kryptonite'
        },
        {
          id: 75435,
          position: 'Amazing opportunity to advance'
        }
      ],
      selectedPositions: [],
      nativeBox: null
    }
  }
  checkboxHandler = (event) => {
    const id = event.target.id;
    let selectedPositions = [...this.state.selectedPositions];
    const openPositions = [...this.state.openPositions];
    const selectedPosition = _.filter(openPositions, (position) => {
      if (position.id === parseInt(id, 10)) {
        return position;
      }
    })
    if (_.includes(selectedPositions, selectedPosition[0])) {
      selectedPositions = _.pull(selectedPositions, selectedPosition[0])
    } else {
      selectedPositions = [...selectedPositions, selectedPosition[0]]
    }
    this.setState({
      selectedPositions: selectedPositions,
      error: ''
    });
  };

  nextStep = () => {
    let error;
    const selectedPositions = this.state.selectedPositions;
    if (selectedPositions.length === 0 || selectedPositions.length > 5) {
      error = errorCheck('selectedPositions');
    }
    if (error) {
      this.setState({error: error});
    } else {
      this.setState(prevState => ({step: prevState.step + 1}))
    }
  }

  lastStep = () => {
    this.setState(prevState => ({step: prevState.step - 1}))
  }

  submitBid = () => {
    const report = {
      positions: [...this.state.selectedPositions]
    }
    console.log(report);
    this.setState({
      selectedPositions: [],
      step: 0 
    });
  }

  clearError = () => {
    this.setState({error: ''});
  }

  dragEnd = (event) => {
    this.setState({targetbox: null})
  }

  dragStart = (event) => {
    event.nativeEvent.dataTransfer.setData("text", event.target.id)
    this.setState({targetbox: true})
  }

  drop = (event) => {
    event.preventDefault();
    if (event.target.id) {
      this.swap(event.nativeEvent.dataTransfer.getData("text"), event.target.id);
    }
  }

  swap = (targetId, id) => {
    let updatedArr = [...this.state.selectedPositions];
    const temp = updatedArr[targetId];
    updatedArr[targetId] = updatedArr[id];
    updatedArr[id] = temp;
    this.setState({
      selectedPositions: updatedArr
    });
  }

  render(){
    let openPosition = (
      <SelectPositions
        positions={this.state.openPositions}
        changed={(event) => this.checkboxHandler(event)}
        selected={this.state.selectedPositions}
        />
    )
    openPosition = this.state.step !== 0 ? (
      <SortSubmitPositions 
        selected={this.state.selectedPositions}
        dragStart={this.dragStart}
        drop={this.drop}
        step={this.state.step}/>
    ) : openPosition

    const backButton = this.state.step > 0
    ? <button onClick={this.lastStep} className='mainBtn'>{this.state.step === 1 ? 'Select Again' : 'Go Back'}</button>
    : <BackToDashboard />

    return(
      <div className='OpenPosition'>
        <div>
          <Subtitle icon='open-positions' title='Bid for open positions' height='70px'/>
        </div>
        <div className='OpenPosition-error'>
        {
          this.state.error
          ? <ErrorMessage message={this.state.error.message} clicked={this.clearError}/>
          : null
        }
        </div>
        <div>
          <h1>Step: {stepList[this.state.step].step}</h1>
          <p>{stepList[this.state.step].instructions}</p>
        </div>
        <div className='OpenPosition-steps'>

          {openPosition}

        </div>
        <div>
          {backButton}
          <button
            className='mainBtn'
            onClick={
              this.state.step === 2
              ? this.submitBid
              : this.nextStep
            }>

            {this.state.step === 2 ? 'Submit' : 'Continue'}

          </button>
        </div>
      </div>
    )
  }
}

export default OpenPosition;
