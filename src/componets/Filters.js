import { useState } from 'react'

const Filters = ({ diceRollNumber, rolls, setRolls, dice }) => {
  /* The Filters component reads the dice results and provides some useful
  info for the user. It also makes the results easier to understand. */
  const [ aboveNumber, setAboveNumber ] = useState('')
  const [ belowNumber, setBelowNumber ] = useState('')
  let rollArray = []

  for (let i = 0; i < diceRollNumber; i++){
    rollArray[i] = rolls[i]
  }

  const totalRolls = diceRollNumber
  const addedRolls = rollArray.reduce((roll, index) => roll = roll + index , 0 )

  const criticals = () => {
    //Tells how many time the user rolled the highest possible number for rolled dice
    let crits = 0
    for (let i = 0; i < rollArray.length; i++){
      if (rollArray[i] === parseInt(dice)){
        crits += 1
      }
    }
    return crits
  }
    
  const critical1s = () => {
    //Tells how many times the user rolled 1/the lowest possible number
    let crits = 0
    for (let i = 0; i < rollArray.length; i++){
      if (rollArray[i] === 1){
        crits += 1
      }
    }
    return crits
  }
  
  const sortHigh = () => {
    //sorts the highest dice first
    setRolls((num => num.slice().sort(function(a, b){return b-a})))
  }
  const sortLow = () => {
    //sorts the lowest dice first
    setRolls((num => num.slice().sort(function(a, b){return a-b})))
  }

  const aboveNumbers = (e) => {
    //This reads through the results and gives the user a number of how
    //many dice were above the entered number
    let previousDiceRollNumber
    let numb = 0
    if (previousDiceRollNumber !== diceRollNumber) {
      for (let i = 0; i < rollArray.length; i++){
        if (rollArray[i] > e){
          numb += 1
        }
      }
      previousDiceRollNumber = diceRollNumber
    } else {
      numb = 0
    }
    
    setAboveNumber(numb)
  }

  const belowNumbers = (e) => {
    //This reads through the results and gives the user a number of how
    //many dice were below the entered number
    let numb = 0

    for (let i = 0; i < rollArray.length; i++){
      if (rollArray[i] < e){
        numb += 1
      }
    }
    
    setBelowNumber(numb)
  }


  return (
    <div className="filter-option-container">
        <div id="total-rolls">Total rolls: {totalRolls}</div>
        <div id="added-rolls">Added Rolls: {addedRolls}</div>
        <div id="critical20s">Criticals: {criticals()}</div>
        <div id="critical1s">Critical 1s: {critical1s()}</div>
        <button id="sort-higher" onClick={() => sortHigh()}>Sort by Higher</button>
        <button id="sort-lower" onClick={() => sortLow()}>Sort by Lower</button>
        <div id="filter-above">How many rolls are above:
          <input 
          id="inputAbove"
          type='text' 
          onChange={(e) => aboveNumbers(e.target.value)} />
          There are:{aboveNumber}
        </div>
        <div id="filter-below">How many rolls are below
          <input 
          id="inputBelow" 
          type='text' 
          onChange={(e) => belowNumbers(e.target.value)} />
          There are:{belowNumber}
        </div>

      </div>
  )
}

export default Filters