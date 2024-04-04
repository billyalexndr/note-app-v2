import React from "react";
import PropTypes from 'prop-types';
import { useLocale } from "../context/LocaleContext";

const ArchiveButton = ({ archived, onArchive }) => {
    const { theme, language } = useLocale();

    return (
        <>
            {!archived && (
                <button
                    className="note-item__archive-button"
                    onClick={onArchive}
                >
                    {language === 'en' ? "Archive" : "Arsip"}
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
