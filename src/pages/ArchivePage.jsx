import React from "react";
import PropTypes from "prop-types";
import { getActiveNotes, getArchivedNotes, deleteNote, unarchiveNote } from "../utils/local-data";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList";
import Navigation from "../components/Navigation";
import SearchBarWrapper from "../components/SearchBar";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            archivedNotes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        };
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    handleDeleteNote = (id) => {
        deleteNote(id);
        this.setState((prevState) => ({
            notes: getActiveNotes(),
            archivedNotes: getArchivedNotes(),
        }));
    };

    handleUnarchiveNote = (id) => {
        unarchiveNote(id);
        this.setState((prevState) => ({
            notes: getActiveNotes(),
            archivedNotes: getArchivedNotes(),
        }));
    };

    render() {
        const { archivedNotes, keyword } = this.state;

        const filteredArchivedNotes = archivedNotes.filter(
            (note) =>
                note.archived &&
                note.title.toLowerCase().includes(keyword.toLowerCase())
        );

        return (
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <Navigation />
                </div>
                <div className="note-app__body">
                    <SearchBarWrapper
                        keyword={keyword}
                        keywordChange={this.onKeywordChangeHandler}
                    />
                    <h2>Arsip</h2>
                    <NoteList
                        notes={filteredArchivedNotes}
                        onDeleteNote={this.handleDeleteNote}
                        onUnarchiveNote={this.handleUnarchiveNote}
                    />
                </div>
            </div>
        );
    }
}

ArchivePageWrapper.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func
};

export default ArchivePageWrapper;