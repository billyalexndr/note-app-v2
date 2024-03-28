import React from "react"
import { useNavigate } from 'react-router-dom';
import NoteInput from "../components/NoteInput"
import Navigation from "../components/Navigation"
import { addNote } from "../utils/local-data"

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/');
    }

    return(
        <>
            <div className="note-app__header">
                <h1>Notes</h1>
                <Navigation />
            </div>
            <div className="note-app__body">
                <NoteInput addNote={onAddNoteHandler} />
            </div>
        </>
    )
}

export default AddPage
