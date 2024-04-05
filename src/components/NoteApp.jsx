import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { useLocale } from "../context/LocaleContext";
import Navigation from "./Navigation"

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
            <div className={`note-app ${theme === 'light' && 'light'}`}>
                <header>
                    {authedUser && (
                        <div className={`note-app__header ${theme === 'light' && 'light'}`}>
                            <h1>{language === 'en' ? 'Notes' : 'Catatan'}</h1>
                            <Navigation isLoggedIn={true} logout={logout} name={authedUser.name} />
                        </div>
                    )}
                </header>
                <main className={`${theme === 'light' && 'light'}`}>
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
                        {!authedUser && <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />}/>}
                    </Routes>
                </main>
            </div>
    )
}

export default NoteApp;
