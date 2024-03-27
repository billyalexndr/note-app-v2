import React from "react";
import { getActiveNotes, archiveNote, deleteNote } from "../utils/local-data";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
    this.setState({
      notes: getActiveNotes(),
    });
  };

  handleArchiveNote = (id) => {
    archiveNote(id);
    this.setState({
      notes: getActiveNotes(),
    });
  };

  render() {
    const { notes, keyword } = this.state;

    const filteredActiveNotes = notes.filter(
      (note) =>
        !note.archived &&
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes</h1>
          <Navigation />
        </div>
        <div className="note-app__body">
          <SearchBar
            keyword={keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={filteredActiveNotes}
            onDeleteNote={this.handleDeleteNote}
            onArchiveNote={this.handleArchiveNote}
          />
        </div>
      </div>
    );
  }
}

export default HomePageWrapper;
