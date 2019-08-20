import React from 'react'

const RomanOutput = (props) => {
  const {westNum, romanNum} = props

  return(
    <div className="output-container">
      <p className ="modernNumber">For the number: {westNum}</p>
      <p className="result">The Roman Numeral is: <span className="result-roman">{romanNum}</span></p>
    </div>
  )
}

export default RomanOutput