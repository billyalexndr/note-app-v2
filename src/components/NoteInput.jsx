import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useLocale } from "../context/LocaleContext";

const NoteInput = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const titleMaxLength = 50;
    const { theme, language } = useLocale();

    const onTitleChangeHandler = (event) => {
        const newTitle = event.target.value;
        if (newTitle.length <= titleMaxLength) {
            setTitle(newTitle);
        }
    };

    const onBodyChangeHandler = (event) => {
        setBody(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addNote({
            title: title,
            body: body,
        });
        setTitle("");
        setBody("");
    };

    const remainingChars = titleMaxLength - title.length;

    return (
        <div className="note-input">
            <h2>{language === 'en' ? 'Add Note' : 'Buat Catatan'}</h2>
            <p className="note-input__title__char-limit">
                {language === 'en' ? 'Remain Character' : 'Sisa Karakter'}: {remainingChars}
            </p>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="title"
                    placeholder={language === 'en' ? "Input note's title..." : "Masukkan judul note..."}
                    value={title}
                    onChange={onTitleChangeHandler}
                    required
                />
                <textarea
                    name="body"
                    placeholder={language === 'en' ? "Write your note here...." : "Tuliskan catatanmu disini..."}
                    value={body}
                    rows="5"
                    onChange={onBodyChangeHandler}
                    required
                />
                <button className="add-button" type="submit">{language === 'en' ? "Add note" : "Tambahkan catatan"}</button>
            </form>
        </div>
    );
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
