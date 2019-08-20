import React, {Component} from 'react';
import RomanInput from "./RomanInput"
import RomanOutput from "./RomanOutput"

class App extends Component {
  state = {
    numValue: 10,
    romanValue: "X"
  }

  romanConvert = (num) => {
    const numeral = [10000, 9000, 5000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const roman = ["X", "MX", "V", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let newArray = []
    let convert = true
    let finalRoman = ""
    let finalNum = num
    if (num === "0") {
      return alert("Please input a valid number")
    }

    while(convert) {
      for (var i = 0; i < numeral.length; i++) {
        if (num >= numeral[i]) {
          newArray.push(roman[i])
          num = num - numeral[i]
          if (num === 0) {
            convert = false;
          }
          break
        }
      }
    }
    finalRoman = newArray.join("")
    this.setState({
      romanValue: finalRoman,
      numValue: finalNum
    })
  }

  render() {
    return (
      <div className="App">
        <div className="roman-container">
          <h1 className="roman-title">Roman Numeral Converter</h1>
          <p className="roman-text">Enter a number to convert it to roman numerals.</p>
        </div>
        <RomanInput romanConvert={this.romanConvert}/>
        <RomanOutput westNum={this.state.numValue} romanNum={this.state.romanValue}/>
      </div>
    );
  }
}

export default App;
