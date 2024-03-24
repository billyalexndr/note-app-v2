import React from "react";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/index";

const NoteItem = ({ note, onDeleteNote, onArchiveNote, onUnarchiveNote }) => {
    return (
        <div className={`note-item ${note.archived ? "archived" : ""}`}>
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
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

export default NoteItem;
