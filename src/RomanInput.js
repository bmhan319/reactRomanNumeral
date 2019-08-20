import React, {Component} from 'react';

class RomanInput extends Component {
  render() {
    return(
      <div className="input-container">
        <form className="form1" id="form1">
          <label htmlFor="digits" className="digits-label">Please enter a number: </label>
          <input type="number" name="digits" id="digits" className="digits text"/>
        </form>
        <button className="digits-button" type="button" form="form1">Submit</button>
      </div>
    )
  }
}

export default RomanInput 