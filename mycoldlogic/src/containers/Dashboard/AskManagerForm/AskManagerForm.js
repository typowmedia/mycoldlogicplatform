import React, { Component } from 'react';
import './AskManagerForm.css';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

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
    this.setState({selectedMgr: event.target.value, error: ''});
  };
  changeSubject = (event) => {
    this.setState({subject: event.target.value, error: ''});
  };
  changeMessage = (event) => {
    if(event.target.value.length > 200) return;
    this.setState({
      message: event.target.value,
      charCount: event.target.value.length,
      error: ''
    });
  };
  submitQuestion = (event) => {
    let error;
    event.preventDefault();
    if (this.state.selectedMgr === '') {
      error = this.setError('manager')
    } else if (this.state.subject === '') {
      error = this.setError('subject')
    } else if (this.state.message === '') {
      error = this.setError('message')
    };
    if (error) {
      this.setState({error: error});
    } else {
      // SEND MESSAGE
      console.log(this.state.selectedMgr, this.state.subject, this.state.message);
      this.setState({error: ''});
    }
  };

  setError = (error) => {
    let err;
    switch (error) {
      case 'manager':
        err = {
          message: 'Please choose a manager to ask a question.',
          type: error
        };
        break;
      case 'subject':
        err = {
          message: 'Please enter a subject.',
          type: error
        };
        break;
      case 'message':
        err = {
          message: 'Please enter a message before sending.',
          type: error
        };
        break;
      default: '';
    }
    return err;
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
        <h3>Ask a Manager</h3>
        <hr/>

        <form>
            <div className="select-manager">
              <select style={this.state.error.type === 'manager' ? {border: '1px solid red'} : null} onChange={this.selectManager}>
                  <option value="">Select a Manager:</option>
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
