import React from "react";
import { Link } from "react-router-dom";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/index";
import PropTypes from 'prop-types';

const NoteItem = ({ note, onDeleteNote, onArchiveNote, onUnarchiveNote }) => {
    return (
        <div className={`note-item ${note.archived ? "archived" : ""}`}>
            <div className="note-item__content">
                <Link to={`/note/${note.id}`} className="note-item__title">
                    <h3>{note.title}</h3>
                </Link>
                <p className="note-item__date">
                    {showFormattedDate(note.createdAt)}
                </p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton onDelete={() => onDeleteNote(note.id)} />
                {!note.archived ? (
                    <ArchiveButton onArchive={() => onArchiveNote(note.id)} />
                ) : (
                    <UnarchiveButton
                        onUnarchive={() => onUnarchiveNote(note.id)}
                    />
                )}
            </div>
        </div>
    );
};

NoteItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }),
    onDeleteNote: PropTypes.func.isRequired,
    onArchiveNote: PropTypes.func,
    onUnarchiveNote: PropTypes.func
};

export default NoteItem;