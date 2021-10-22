import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = ({ searchValue, searchHandler }) => {
  return (
    <div className="search-bar-container">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={searchHandler}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
