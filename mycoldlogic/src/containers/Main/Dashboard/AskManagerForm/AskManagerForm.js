import React, { Component } from 'react';
import './AskManagerForm.css';
import ErrorMessage from '../../../../components/Requests/ErrorMessage/ErrorMessage';
import SuccessMessage from '../../../../components/Requests/SuccessMessage/SuccessMessage';
import { errorCheck } from '../../../../utilities/errorCheck';

class AskManagerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMgr: '',
      subject: '',
      message: '',
      error: '',
      success: '',
      charCount: ''
    };
  }

  selectManager = (event) => {
    this.setState({
      selectedMgr: event.target.value,
      error: '',
      success: ''
    });
  };
  changeSubject = (event) => {
    this.setState({
      subject: event.target.value,
      error: '',
      success: ''
    });
  };
  changeMessage = (event) => {
    if(event.target.value.length > 200) return;
    this.setState({
      message: event.target.value,
      charCount: event.target.value.length,
      error: '',
      success: ''
    });
  };
  submitQuestion = (event) => {
    let error;
    event.preventDefault();
    if (this.state.selectedMgr === '') {
      error = errorCheck('manager')
    } else if (this.state.subject === '') {
      error = errorCheck('subject')
    } else if (this.state.message === '') {
      error = errorCheck('message')
    };
    if (error) {
      this.setState({error: error, success: ''});
    } else {
      // SEND MESSAGE
      console.log(this.state.selectedMgr, this.state.subject, this.state.message);
      this.setState( prevState => ({
        selectedMgr: '',
        subject: '',
        message: '',
        error: '',
        success: {
          message: `Message sent! ${this.state.selectedMgr} will contact you shortly.`
        },
        charCount: ''
      }));
    }
  };


  render(){
    const characterClassName = {color: 'black'};
    if (this.state.charCount > 150) {
      characterClassName.color = 'orange';
    }
    if (this.state.charCount === 200) {
      characterClassName.color = 'red';
    }
    return(
      <div className='AskManagerForm'>
        {
          this.state.error.type
          ? (
            <ErrorMessage
              message={this.state.error.message}
              clicked={() => this.setState({error: ''})}
              />
          )
          : null
        }
        {
          this.state.success !== ''
          ? (
            <SuccessMessage
              message={this.state.success.message}
              clicked={() => this.setState({success: ''})}
              />
          )
          : null
        }
        <h3>Ask a Manager</h3>
        <hr/>

        <form>
            <div className="select-manager">
              <select style={this.state.error.type === 'manager' ? {border: '1px solid red'} : null} onChange={this.selectManager} value={this.state.selectedMgr}>
                  <option value="select">Select a Manager:</option>
                  <option value="Dan Imbery">Dan Imbery</option>
                  <option value="Laurel O'Donnell">Laurel O'Donnell</option>
                  <option value="Shanda Hope">Shanda Hope</option>
              </select>
            </div>
            <div>Subject:
              <input
                style={this.state.error.type === 'subject' ? {border: '1px solid red'} : null} onChange={this.changeSubject}
                type='text' placeholder='Write your subject here'
                value={this.state.subject}/>
            </div>

            <label htmlFor='ask-manager-message'>Message:</label>

            <textarea
              onChange={this.changeMessage}
              rows='4'
              name='ask-manager-message'
              placeholder='Ask your manager here'
              value={this.state.message}
              style={this.state.error.type === 'message' ? {border: '1px solid red'} : null}
              />

            <small>
              characters remaining:
              <span style={characterClassName}>
                {200 - this.state.message.length}
              </span>
            </small>

            <button onClick={this.submitQuestion} type='submit' className={'mainBtn'}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AskManagerForm;
