import React, {Component} from 'react';

class RomanInput extends Component {
  state = {
    westernNum: "0"
  }

  changeValue = (event) => {
    this.setState({
      westernNum: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.romanConvert(this.state.westernNum)
  }

  render() {
    return(
      <div className="input-container">
        <form className="form1" id="form1" onSubmit={this.handleSubmit}>
          <label htmlFor="digits" className="digits-label">Please enter a number: </label>
          <input type="number" name="digits" id="digits" className="digits text" min="0" max="10000" placeholder="Up to 10,000" onChange={this.changeValue}/>
        </form>
        <button className="digits-button" type="button" form="form1" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default RomanInput 