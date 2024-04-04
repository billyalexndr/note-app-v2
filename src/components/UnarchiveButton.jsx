import React from "react";
import PropTypes from 'prop-types';
import { useLocale } from "../context/LocaleContext";

const UnarchiveButton = ({ onUnarchive }) => {
    const { theme, language } = useLocale();
    return (
        <button className="note-item__archive-button" onClick={onUnarchive}>
            {language === 'en' ? "Unarchive" : "Buka Arsip"}
        </button>
    );
};

UnarchiveButton.propTypes = {
    onUnarchive: PropTypes.func
};

export default UnarchiveButton;
