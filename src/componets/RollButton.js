import { useNavigate } from "react-router-dom"

const RollButton = ({ refreshRoll, dice, setDiceRollNumber, diceRollNumber, setRolls }) => {
    /*
        The RollButton component is the form that ask users how many times the dice
        should be rolled and then has a button listed that when clicked will create a
        state array of however many randomly generated numbers the user inputed.
        Then is sends the user to the rollpage to display the results.
    */

    const navigate = useNavigate()

    const toRollPage = () => {
        navigate("/DM-Helper/rollpage", { replace: true })
    }

    const rollDice = () => {
        const rollers = []
        
        const getRandomInt = (min, max) => {  //We do this because it's more accurate at getting random integers
            min = Math.floor(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        for (let i = 0; i < parseInt(diceRollNumber); i++) {
            rollers[i] = getRandomInt(1, dice)
        }

        setRolls(rollers)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(isNaN(diceRollNumber) || diceRollNumber > 10000 || diceRollNumber === '') {
            alert('Please enter a number below 10000')
            return
        }
        
        toRollPage()
        refreshRoll()
        rollDice()

    }

  return (
    <form className="container-background" onSubmit={onSubmit}>
        <div className="button-container">
            <div className="instruction">How many rolls do you require?</div>
            <input 
                className="input-rolls" 
                type='text' 
                placeholder={'D' + dice} 
                onChange={(e) => setDiceRollNumber(e.target.value)} 
            />
            <div className='button' id='roll-button'>
                <div id='slide'></div>
                <button type='submit'>Roll</button>
            </div>
        </div>
    </form>
  )
}

export default RollButton