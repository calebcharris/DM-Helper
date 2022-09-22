import { useState } from "react"
import AddNotes from "./AddNotes"
import NoteHeader from "./NoteHeader"
import Notes from "./Notes"
import NoteFooter from "./NoteFooter"


const NotePage = () => {
  /* 
    The NotePage component initializes various states used throughout the 
    Notes section of the program. It also contains the AvailableSpace function
    and Note components.
  */

  const [ showAddNotes, setShowAddNotes] = useState(false)
  const [ currentPage, setCurrentPage ] = useState('Spells')
  const [ currentMessage, setCurrentMessage] = useState('')
  const [ showEdit, setShowEdit ] = useState(false)
  const [ selectedNote, setSelectedNote ] = useState('')
  const [ nextSpace, setNextSpace ] = useState()

  //This detects the next empty storage file and sets the note number as the nextSpace state.
  const availableSpace = (editClicked) => {
    if (editClicked === true) {
      setNextSpace(selectedNote)
      editClicked = false
    } else {
      for (let i = 1; i <= 100; i++) {
        if (JSON.parse(localStorage.getItem(`${currentPage + i}`)) === null) {
          setNextSpace(i)
          break
        }
      }
    } 
  }

  return (
    <div className="notepage-container">
        <NoteHeader
          setShowAddNotes={setShowAddNotes}
          setShowEdit={setShowEdit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
        />
        
        <Notes 
          currentPage={currentPage}
          setShowEdit={setShowEdit}
          setSelectedNote={setSelectedNote}
          setShowAddNotes={setShowAddNotes}
        />

        {showAddNotes && <AddNotes 
          availableSpace={availableSpace}
          setNextSpace={setNextSpace}
          selectedNote={selectedNote}
          nextSpace={nextSpace}
          currentPage={currentPage}
          currentMessage={currentMessage}
          setCurrentMessage={setCurrentMessage}
          setShowAddNotes={setShowAddNotes}
          setShowEdit={setShowEdit}/>
        }

        <NoteFooter 
          availableSpace={availableSpace}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          showAddNotes={showAddNotes}
          setShowAddNotes={setShowAddNotes}
          selectedNote={selectedNote}
          currentPage={currentPage}
        />
        
    </div>
  )
}

export default NotePage