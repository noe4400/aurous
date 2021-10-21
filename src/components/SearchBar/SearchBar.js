import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="search" className="search-bar-input" />
    </div>
  );
};

export default SearchBar;
