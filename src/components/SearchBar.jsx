import React from "react";
import PropTypes from 'prop-types';
import { useLocale } from "../context/LocaleContext";

const SearchBar = ({ keyword, keywordChange }) => {
  const { theme, language } = useLocale();
  
  return (
    <input
      className={`search-bar ${theme === 'light' && 'light'}`}
      type="text"
      placeholder={language === 'en' ? 'Search note...' : 'Cari catatan...'}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar