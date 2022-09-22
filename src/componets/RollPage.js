import BackButton from "./BackButton"
import DiceHeader from "./DiceHeader"
import Filters from "./Filters"
import RollResults from "./RollResults"

const RollPage = ({ onClick, rolls, setRolls, diceRollNumber, dice }) => {
  // The RollPage Component holds different components for a useful roll result display.
  return (
    <div className="roll-container">
      <DiceHeader 
        onClick={ onClick }
      />

      <RollResults 
        rolls={rolls}
      />

      <Filters 
        diceRollNumber={diceRollNumber}
        rolls={rolls}
        dice={dice}
        setRolls={setRolls}
      />
      
      <BackButton />
    </div>
    
  )
}

export default RollPage