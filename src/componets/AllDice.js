const AllDice = ({ onClick }) => {
    /*
        This component is the 6 Dice buttons listed on the starting page, when 
        clicked the component calls the onClick function in app.js. 
        The value element is so the function knows with button was clicked.
     */

  return (
    <div className='dice'>
        <div className='D20'>
            <button id='AllDice20' value='20' onClick={onClick}>D20</button>
        </div>
        <div className='D12'>
            <button id='AllDice12' value='12' onClick={onClick}>D12</button>
        </div>
        <div className='D10'>
            <button id='AllDice10' value='10' onClick={onClick}>D10</button>
        </div>
        <div className='D8'>
            <button id='AllDice8' value='8' onClick={onClick}>D8</button>
        </div>
        <div className='D6'>
            <button id='AllDice6' value='6' onClick={onClick}>D6</button>
        </div>
        <div className='D4'>
            <button id='AllDice4' value='4' onClick={onClick}>D4</button>
        </div>
    </div>

  )
}

export default AllDice