import React from "react"
import { useNavigate } from 'react-router-dom';
import NoteInput from "../components/NoteInput"
import { addNote } from "../utils/api"

function AddPage() {
    const navigate = useNavigate();

    const onAddNoteHandler = async (note) => {
        await addNote(note)
        navigate('/')
    }

    return(
        <>
            <div className="note-app__body">
                <NoteInput addNote={onAddNoteHandler} />
            </div>
        </>
    )
}

export default AddPage
