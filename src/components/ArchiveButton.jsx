import React from "react";

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

export default ArchiveButton;
