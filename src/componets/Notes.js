const Notes = ({ currentPage, setShowEdit, setSelectedNote, setShowAddNotes }) => {
  /* 
    The Notes Component displays the notes in each different section by reading
    through incremental filenames from localStorage. Users can also select the notes
    and it wall call the handleClick function
  */
  let previousValue = null
  let currentValue = null
  let note = []

  for (let i = 1; i <= 100; i++) {
    if (JSON.parse(localStorage.getItem(`${currentPage}100`)) !== null)
      { 
        alert('Note limit reached please delete some notes')
        break
      } 
      else if (JSON.parse(localStorage.getItem(`${currentPage + i}`)) !== null) 
      {
        note[i] = JSON.parse(localStorage.getItem(`${currentPage + i}`))
      }
  }

  const handleClick = (index) => {
    //Sets the selectedNote for editing or deleting and deselects it if clicked
    //twice.
    currentValue = index
    if (currentValue === previousValue) {
      setShowEdit(false)
      previousValue = null
    } else if (previousValue === null) {
      previousValue = currentValue
      setShowEdit(true)
      setSelectedNote(currentValue)
    }
    setShowAddNotes(false)
  }


  const listNotes = note.map((note, index) => <div key={index} onClick={() => handleClick(index)}>{index + '.  ' + note}</div>)


  return (
    <div className="note-display">{listNotes}</div>
  )
}

export default Notes