import React from "react";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      // value={searchTerm}
      // onChange={onSearchChange}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};

// SearchBar.propType = {
//   keyword: PropTypes.string.isRequired,
//   keywordChange: PropTypes.func.isRequired
// }

export default SearchBar