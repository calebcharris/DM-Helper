const NoteHeader = ({ currentPage, setCurrentPage, setShowAddNotes, setShowEdit }) => {
  /*
    Note Header is to determine the current section of Notes the user is on.
    By clicking one of the three deifferent section buttons they can change
    the state of the currentpage. It also closes the edit buttons (Edit and Delete)
    and the addForm when the buttons are clicked. 
  */

  const Spells = "Spells"
  const Items = "Items"
  const Miscs = "Misc"

  const spellFunction = () => {
    setShowAddNotes(false)
    setShowEdit(false)
    setCurrentPage(Spells)
  }
  const itemFunction = () => {
    setShowAddNotes(false)
    setShowEdit(false)
    setCurrentPage(Items)
  }
  const miscFunction = () => {
    setShowAddNotes(false)
    setShowEdit(false)
    setCurrentPage(Miscs)
  }

  return (
    <div className="note-header">
      <div className="note-buttons">
        <div className="button" id="left-button">
          <div id="slide"></div>
          <button onClick={spellFunction}>Spells</button>
        </div>
        <div className="button" id="center-button">
          <div id="slide"></div>
          <button onClick={itemFunction}>Items</button>
        </div>
        <div className="button" id="right-button">
          <div id="slide"></div>
          <button onClick={miscFunction}>misc</button>
        </div>
      </div>
      <h2 className="note-head" id={currentPage}>{currentPage}</h2>
    </div>
  )
}

export default NoteHeader