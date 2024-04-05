import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import { FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navigation = ({ logout, isLoggedIn, name }) => {
    const navigate = useNavigate();
    const { theme, toggleTheme, language, toggleLanguage } = useLocale();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleToggleLanguage = () => {
        toggleLanguage();
    };

    const handleToggleTheme = () => {
        toggleTheme();
    };

    return (
        <nav className={`navbar ${theme === 'light' && 'light'}`}>
            <ul>
                <li>
                    <Link to="/">{language === 'en' ? 'Home' : 'Beranda'}</Link>
                </li>
                <li>
                    <Link to="/archive">{language === 'en' ? 'Archive Note' : 'Arsip Catatan'}</Link>
                </li>
                <li>
                    <Link to="/add-note">{language === 'en' ? 'Add Note' : 'Tambah Catatan'}</Link>
                </li>
                <div className="right">
                    <li>
                        <button onClick={handleToggleLanguage}>
                            {language === 'en' ? 'id' : 'en'}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleToggleTheme}>{ theme === 'light' ? <FaMoon /> : <FaSun /> }</button>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <button className="logout" onClick={handleLogout}>
                                {name} <span><FiLogOut /></span>
                            </button>
                        </li>
                    ) : null}
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
