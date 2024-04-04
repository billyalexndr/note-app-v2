import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { useLocale } from "../context/LocaleContext";

const NoteApp = () => {
    const [authedUser, setAuthedUser] = useState(null)
    const [initializing, setInitializing] = useState(true)
    const { theme, language } = useLocale();
    
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getUserLogged()
            setAuthedUser(data)
            setInitializing(false)
        }
        fetchData()
    }, [])

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken)
        const { data } = await getUserLogged()
        setAuthedUser(data)
    }

    const logout = () => {
        setAuthedUser(null)
        putAccessToken('')
    }

    if (initializing) {
        return null
    }

    return(
            <div className="note-app">
                <header>
                    {authedUser && (
                        <div className="note-app__header">
                            <h1>{language === 'en' ? 'Notes' : 'Catatan'}</h1>
                            <Navigation isLoggedIn={true} logout={logout} name={authedUser.name} />
                        </div>
                    )}
                </header>
                <main>
                    <Routes>
                        {!authedUser  && (
                            <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        )}
                        {!authedUser  && (
                            <Route path="/register" element={<RegisterPage />} />
                        )}
                        {authedUser && <Route path="/" element={<HomePage />} />}
                        {authedUser && <Route path="/add-note" element={<AddPage />} />}
                        {authedUser && <Route path="/archive" element={<ArchivePage />} />}
                        {authedUser && <Route path="/note/:id" element={<DetailPage />} />}
                        {authedUser && <Route path="*" element={<NotFoundPage />} />}
                    </Routes>
                </main>
            </div>
    )
}

export default NoteApp;
