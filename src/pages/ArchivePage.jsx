import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/api";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList";
import SearchBarWrapper from "../components/SearchBar";
import { useLocale } from "../context/LocaleContext";

const ArchivePage = ({ defaultKeyword, keywordChange }) => {
    const [archivedNotes, setArchivedNotes] = useState([]);
    const [keyword, setKeyword] = useState(defaultKeyword || '');
    const { theme, language } = useLocale();

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getArchivedNotes();
            if (!error) {
                setArchivedNotes(data); 
            } else {
                console.error("Error fetching archived notes");
            }
        };
        fetchData();
    }, []); 

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        keywordChange(keyword);
    };

    const handleDeleteNote = async (id) => {
        const { error } = await deleteNote(id);
        if (!error) {
            setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
        } else {
            console.error("Error deleting note");
        }
    };

    const handleUnarchiveNote = async (id) => {
        const { error } = await unarchiveNote(id);
        if (!error) {
            setArchivedNotes(
                archivedNotes.map((note) =>
                    note.id === id ? { ...note, archived: false } : note
                )
            );
        } else {
            console.error("Error unarchiving note");
        }
    };

    const filteredArchivedNotes = archivedNotes.filter(
        (note) =>
            note.archived &&
            note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div className="note-app">
            <div className="note-app__body">
                <SearchBarWrapper
                    keyword={keyword}
                    keywordChange={onKeywordChangeHandler}
                />
                <h2>{language === 'en' ? "Archive" : "Arsip"}</h2>
                <NoteList
                    notes={filteredArchivedNotes}
                    onDeleteNote={handleDeleteNote}
                    onUnarchiveNote={handleUnarchiveNote}
                />
            </div>
        </div>
    );
};

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
};

export default ArchivePage;
