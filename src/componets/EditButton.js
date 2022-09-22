const EditButton = ({ availableSpace, selectedNote, setShowAddNotes, showAddNotes }) => {
  //The Edit button calls upon the AddNotes component but sets the input to
  //save on the selected note instead of the next empty space.
  const handleClick = () => {
    if (showAddNotes === true) {
      setShowAddNotes(false)
    } else {
      setShowAddNotes(true)
    }
    let editClicked = true
    availableSpace(editClicked)
  }
  return (
    <div className="button" id="edit-button">
        <div id="slide"></div>
        <button onClick={() => handleClick()}>edit: {selectedNote}</button>
    </div>
  )
}

export default EditButton