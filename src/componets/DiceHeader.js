const DiceHeader = ({ onClick }) => {
/*
  This component is the 6 Dice buttons listed under the title on the RollPage, 
  when clicked the component calls the onClick function in app.js. 
  The value element is so the function knows with button was clicked.
*/
  return (
    <div className="dice-header">
        <div className="button" id="D20">
          <div id="slide"></div>
          <button 
          value={'20'} onClick={onClick} >D20</button>
        </div>
        <div className="button" id="D12">
          <div id="slide"></div>
          <button value={'12'} onClick={onClick} >D12</button>
        </div>
        <div className="button" id="D10">
          <div id="slide"></div>
          <button value={'10'} onClick={onClick} >D10</button>
        </div>
        <div className="button" id="D8">
          <div id="slide"></div>
          <button value={'8'} onClick={onClick} >D8</button>
        </div>
        <div className="button" id="D6">
          <div id="slide"></div>
          <button value={'6'} onClick={onClick} >D6</button>
        </div>
        <div className="button" id="D4">
          <div id="slide"></div>
          <button value={'4'} onClick={onClick} >D4</button>
        </div>
      </div>
  )
}

export default DiceHeader