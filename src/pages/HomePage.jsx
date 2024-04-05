import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getActiveNotes, archiveNote, deleteNote } from "../utils/api";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { useLocale } from "../context/LocaleContext";
import Loading from "../components/Loading"; 

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]); 
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [loading, setLoading] = useState(true); 
  const { theme, language } = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getActiveNotes();
        if (!error) {
          setNotes(data);
        } else {
          console.error("Error fetching active notes");
        }
      } catch (error) {
        console.error("Error fetching active notes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const handleDeleteNote = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      setNotes(notes.filter((note) => note.id !== id));
    } else {
      console.error("Error deleting note");
    }
  };

  const handleArchiveNote = async (id) => {
    const { error } = await archiveNote(id);
    if (!error) {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, archived: true } : note
        )
      );
    } else {
      console.error("Error archiving note");
    }
  };

  const filteredActiveNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (loading) {
    return <Loading />; 
  }

  return (
    <div className="note-app">
      <div className={`note-app__body ${theme === 'light' && 'light'}`}>
        <SearchBar
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        <h2>{language === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h2>
        <NoteList
          notes={filteredActiveNotes}
          onDeleteNote={handleDeleteNote}
          onArchiveNote={handleArchiveNote}
        />
      </div>
    </div>
  );
}

export default HomePage;
