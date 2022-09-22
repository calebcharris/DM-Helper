import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './componets/Header'
import Footer from './componets/Footer'
import About from './componets/About'
import AllDice from './componets/AllDice'
import RollPage from './componets/RollPage'
import RollButton from './componets/RollButton'
import NoteButton from './componets/NoteButton'
import NotePage from './componets/NotePage'

const App = () => {
  const [showDiceRolls, setShowDiceRolls] = useState(false)
  const [dice, setDice] = useState('')
  const [diceRollNumber, setDiceRollNumber] = useState('')
  const [rolls, setRolls] = useState([])

  const onClick = (e) => {
      // When a dice is clicked it sets the dice value to the dice state 
      // and displays the roll dice form.
      e.preventDefault()
      setDice(e.target.value)
      setShowDiceRolls(true)
  }

  const refreshSubmitButton = () => {
    //  when another dice is selected after selecting one this makes the rollbutton
    //  form leave.
    setShowDiceRolls(false)
  }

  return (
    <Router>
      <div className="container">
        <Header />
          <Routes>
            <Route path='/DM-Helper' element={
              <> 
                {
                  showDiceRolls && <RollButton 
                  refreshRoll={refreshSubmitButton} 
                  dice={dice}
                  setDiceRollNumber={setDiceRollNumber}
                  diceRollNumber={diceRollNumber}
                  setRolls={setRolls}/>
                } 

                <AllDice 
                  onClick={onClick} 
                />

                <NoteButton />

              </>
            }/>
            <Route path='/DM-Helper/RollPage' element={ 
              <> 
                {
                  showDiceRolls && <RollButton 
                  refreshRoll={refreshSubmitButton} 
                  dice={dice}
                  setDiceRollNumber={setDiceRollNumber}
                  diceRollNumber={diceRollNumber}
                  setRolls={setRolls}/>
                } 

                <RollPage 
                  onClick={onClick}
                  diceRollNumber={diceRollNumber}
                  dice={dice}
                  rolls={rolls}
                  setRolls={setRolls} 
                />

                <NoteButton />

              </>
            } />

            <Route path='/DM-Helper/About' element={<About />} />
            
            <Route path='/DM-Helper/Notes' element={<NotePage setDice={setDice}/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;