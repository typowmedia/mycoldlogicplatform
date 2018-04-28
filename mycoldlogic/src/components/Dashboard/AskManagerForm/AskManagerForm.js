import React, { Component } from 'react';
import './AskManagerForm.css';

class AskManagerForm extends Component {
  render(){
    return(
      <div className='AskManagerForm'>
        <h3>Ask a Manager</h3>
        <hr/>
        <form>
          <select>
            <option>Dan Imbery</option>
            <option>Laurel O'Donnell</option>
            <option>Shanda Hope</option>
          </select>
          <div>Subject:<input type='text' placeholder='Write your subject here'/></div>
          <label for='ask-manager-message'>Message:</label>
          <textarea rows='4' id='ask-manager-message'></textarea>
          <button type='submit' className={'mainBtn'}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AskManagerForm;
