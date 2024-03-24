import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchTerm: "",
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    },
                ],
            };
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    handleArchiveNote = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: true } : note
            ),
        }));
    };

    handleUnarchiveNote = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: false } : note
            ),
        }));
    };

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    render() {
        const { notes, searchTerm } = this.state;

        const filteredActiveNotes = notes.filter(
            (note) =>
                !note.archived &&
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const filteredArchivedNotes = notes.filter(
            (note) =>
                note.archived &&
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <input
                        type="text"
                        placeholder="Cari catatan..."
                        value={searchTerm}
                        onChange={this.handleSearchChange}
                    />
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList
                        notes={filteredActiveNotes}
                        onDeleteNote={this.onDeleteHandler}
                        onArchiveNote={this.handleArchiveNote}
                    />
                    <h2>Arsip</h2>
                    <NoteList
                        notes={filteredArchivedNotes}
                        onDeleteNote={this.onDeleteHandler}
                        onUnarchiveNote={this.handleUnarchiveNote}
                    />
                </div>
            </div>
        );
    }
}

export default NoteApp;
