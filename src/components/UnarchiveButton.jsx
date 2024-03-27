import React, { Component } from "react";
import PropTypes from 'prop-types';

const UnarchiveButton = ({ onUnarchive }) => {
    return (
        <button className="note-item__archive-button" onClick={onUnarchive}>
            Unarchive
        </button>
    );
};

UnarchiveButton.propTypes = {
    onUnarchive: PropTypes.func
};

export default UnarchiveButton;
