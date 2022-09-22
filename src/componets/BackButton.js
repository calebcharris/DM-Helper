const BackButton = () => {
  // At any point in the program users can go back to the main page using this
  return (
    <a href='/DM-Helper'>
      <div className="button" id="back-button">
          <div id="slide"></div>
          <button>Go back</button>
      </div>
    </a>
  )
}

export default BackButton