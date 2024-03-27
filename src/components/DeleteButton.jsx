import React from "react";
import PropTypes from 'prop-types';

const DeleteButton = ({ onDelete }) => {
    return (
        <button className="note-item__delete-button" onClick={onDelete}>
            Delete
        </button>
    );
};

DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired
};

export default DeleteButton;
