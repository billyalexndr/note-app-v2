import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import NoteApp from "./components/NoteApp";
import { LocaleProvider } from "./context/LocaleContext";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <LocaleProvider>
        <BrowserRouter>
            <NoteApp />
        </BrowserRouter>
    </LocaleProvider>
);
