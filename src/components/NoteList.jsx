import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

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

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })).isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onArchiveNote: PropTypes.func,
    onUnarchiveNote: PropTypes.func
};

export default NoteList;
