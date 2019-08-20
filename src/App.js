import React, {Component} from 'react';
import RomanInput from "./RomanInput"
import RomanOutput from "./RomanOutput"

class App extends Component {
  state = {
    numValue: 10,
    romanValue: "X"
  }

  render() {
    return (
      <div className="App">
        <div className="roman-container">
          <h1 className="roman-title">Roman Numeral Converter</h1>
          <p className="roman-text">Enter a number to convert it to roman numerals.</p>
        </div>
        <RomanInput />
        <RomanOutput westNum={this.state.numValue} romanNum={this.state.romanValue}/>
      </div>
    );
  }
}

export default App;
