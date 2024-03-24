import React, { Component } from "react";

const UnarchiveButton = ({ onUnarchive }) => {
    return (
        <button className="note-item__archive-button" onClick={onUnarchive}>
            Unarchive
        </button>
    );
};

export default UnarchiveButton;
