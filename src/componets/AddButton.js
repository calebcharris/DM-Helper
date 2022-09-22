const AddButton = ({ setShowEdit, showAddNotes, setShowAddNotes, availableSpace }) => {
  /*
    AddButton component is a button that when clicked calls on the showAdd 
    function which sets the state of ShowAddNotes to true, then false if
    clicked again. The function also calls the availbleSpace function in the
    NotePage component and sends a boolean stating that the Add button was 
    clicked and not the edit button.
  */

  const showAdd = () => {
    if (showAddNotes === true) {
      setShowAddNotes(false)
    } else {
      setShowAddNotes(true)
    }
    setShowEdit(false)
    let editClicked = false
    availableSpace(editClicked)
  }

  return (
    <div className="button" id="add-button">
        <div id="slide"></div>
        <button onClick={() => showAdd()}>Add</button>
    </div>
  )
}

export default AddButton