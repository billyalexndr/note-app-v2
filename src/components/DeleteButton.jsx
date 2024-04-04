import React from "react";
import PropTypes from 'prop-types';
import { useLocale } from "../context/LocaleContext";

const DeleteButton = ({ onDelete }) => {
    const { theme, language } = useLocale();

    return (
        <button className="note-item__delete-button" onClick={onDelete}>
            {language === 'en' ? "Delete" : "Hapus"}
        </button>
    );
};

DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired
};

export default DeleteButton;
