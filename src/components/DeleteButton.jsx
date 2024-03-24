import React from "react";

const DeleteButton = ({ onDelete }) => {
    return (
        <button className="note-item__delete-button" onClick={onDelete}>
            Delete
        </button>
    );
};

export default DeleteButton;
