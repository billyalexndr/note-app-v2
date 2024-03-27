import React from "react";
import PropTypes from 'prop-types';

const ArchiveButton = ({ archived, onArchive }) => {
    return (
        <>
            {!archived && (
                <button
                    className="note-item__archive-button"
                    onClick={onArchive}
                >
                    Archive
                </button>
            )}
        </>
    );
};

ArchiveButton.propTypes = {
    archived: PropTypes.bool,
    onArchive: PropTypes.func
};


export default ArchiveButton;
