import React, { Component } from 'react';
import './SafeSite.css';
import TempPhoto from '../../assets/tempwarehousephoto.jpg';
import Subtitle from '../../components/Subtitle/Subtitle';
import SafeSiteForm from './SafeSiteForm/SafeSiteForm';
import RequestSuccess from '../../components/RequestSuccess/RequestSuccess';

class SafeSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startReport: false,
      formSubmitted: false,
    };
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  submitFormHandler = () => {
    this.setState(prevState => ({formSubmitted: !prevState.formSubmitted}));
  }

  render(){
    let safeSite = (
      <div>
        <p>It's our responsibilty to report any concern about safety, this helps us to keep our facilities safe and our work free of concerns</p>
        <button className='mainBtn' onClick={() => this.setState({startReport: true})}>Start my Report</button>
      </div>
    )
    if (this.state.startReport){
      safeSite = <SafeSiteForm submitForm={this.submitFormHandler}/>
    }
    if(this.state.startReport && this.state.formSubmitted){
      safeSite = (
        <RequestSuccess
          clicked={this.submitFormHandler}
          successMessage='Thank you for helping us keep our workplace safe for everyone and creating this report through your ColdLogic portal. This report will be carefully investigated'
          />
      )
    }
    return(
      <div className='SafeSite'>
        <img src={TempPhoto} alt=""/>
        <div>
          <Subtitle
            title='Safe Site Report'
            icon='safe-site-report'
            />
          {safeSite}
        </div>
      </div>
    );
  }
}

export default SafeSite;
