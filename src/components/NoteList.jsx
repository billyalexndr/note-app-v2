import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDeleteNote, onArchiveNote, onUnarchiveNote }) => {
    console.log(notes);
    return (
        <>
            {notes.length === 0 ? (
                <p className="notes-list__empty-message">No notes available.</p>
            ) : (
                <div className="notes-list">
                    {notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            onDeleteNote={onDeleteNote}
                            onArchiveNote={onArchiveNote}
                            onUnarchiveNote={onUnarchiveNote}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default NoteList;
