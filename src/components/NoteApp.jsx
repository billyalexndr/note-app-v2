import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";

const NoteApp = () => {
    return(
        <div className="note-app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/add-note" element={<AddPage />} />
                <Route path="/note/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default NoteApp;
