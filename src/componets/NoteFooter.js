import AddButton from "./AddButton"
import BackButton from "./BackButton"
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"

const NoteFooter = ({ setEditClicked, showAddNotes, setShowAddNotes, currentPage, showEdit, setShowEdit, selectedNote, availableSpace }) => {
  //NoteFooter is a collection of components to display on the lower part of the 
  //DM-helper page.
  return (
    <div className="note-footer">

        {showEdit && <EditButton
          availableSpace={availableSpace}
          setEditClicked={setEditClicked}
          showAddNotes={showAddNotes}
          selectedNote={selectedNote}
          setShowEdit={setShowEdit}
          setShowAddNotes={setShowAddNotes} />
        }

        {showEdit && <DeleteButton
          currentPage={currentPage}
          selectedNote={selectedNote}
          setShowEdit={setShowEdit} />
        }

        <AddButton
          setShowEdit={setShowEdit}
          availableSpace = {availableSpace}
          showAddNotes={showAddNotes} 
          setShowAddNotes={setShowAddNotes}
        />

        <BackButton />
        
    </div>
  )
}

export default NoteFooter