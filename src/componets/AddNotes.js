
const AddNotes = ({ setEditClicked, setShowEdit, currentPage, currentMessage, setCurrentMessage, setShowAddNotes, nextSpace, selectedNote, editClicked }) => {
  /*
    The AddNotes component appears when the AddButton or EditButton Component 
    is clicked. AddNotes is a form with a textarea and a save button, the save 
    button notifies users of which Note number the input will save too.
    The save button submits the form wich sets setShowAddNotes to false
    causing the addForm to disappear. The form submmit function saves the note
    to localStorage and if the edit button was clicked then the new input replaces
    the selected note.
  */
  const onSubmit = (e) => {
    e.preventDefault()
    setShowAddNotes(false)
    if (editClicked === true) {
      localStorage.setItem(`${currentPage + selectedNote}`, JSON.stringify(currentMessage))
      setShowEdit(false)
      setEditClicked(false)
    } else {
      localStorage.setItem(`${currentPage + nextSpace}`, JSON.stringify(currentMessage))
    }
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-details">
        <textarea
          id="input-form"
          type='text'
          placeholder={currentPage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <div className='button' id='save-button'>
          <div id='slide'></div>
          <button type='submit'>Save at {nextSpace}</button>
        </div>
      </div>
    </form>
  )
}

export default AddNotes