const DeleteButton = ({ currentPage, selectedNote, setShowEdit }) => {

  // The DeleteButton component deletes the selected note from localStorage.
  
  const handleClick = () => {
    localStorage.removeItem(`${currentPage + selectedNote}`)
    setShowEdit(false)
  }
  
  return (
    <div className="button" id="delete-button">
        <div id="slide"></div>
        <button onClick={() => handleClick()}>delete: {selectedNote}</button>
    </div>
  )
}

export default DeleteButton