const NoteButton = () => {
    //This button takes users to the Notes page.
    return (
        <a href='/Notes'>
            <div className="button" id="note-button">
                <div id="slide"></div>
                <button>Notes</button>
            </div>
        </a>
    )
}
    
export default NoteButton