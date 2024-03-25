import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import NotFoundPage from "./NotFoundPage";

const DetailPage = () => {
    const { id } = useParams();
    const note = getNote(id);

    if (!note) {
        return <NotFoundPage />
    }

    return (
        <div className="note-app">
            <div className="note-app__header">
                <h1>Notes</h1>
                <Navigation />
            </div>
            <div className="note-app__body">
                <h2>{note.title}</h2>
                <p>{showFormattedDate(note.createdAt)}</p>
                <p>{note.body}</p>
            </div>
        </div>
    );
};

export default DetailPage;
