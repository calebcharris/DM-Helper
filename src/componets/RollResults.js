const RollResults = ( rolls ) => {
  //RollResults displays the results of the rolled dice
  let rollResult = []
  
  for (let i = 0; i < rolls.rolls.length; i++){
    rollResult[i] = rolls.rolls[i]
  }

  const listRolls = rollResult.map((number, index) => <div key={index}>{number}</div>)

  return (
    <div className="roll-results" >
      {listRolls}
    </div>
  )
}

export default RollResults