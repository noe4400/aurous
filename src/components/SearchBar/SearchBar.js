import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { filterUsers } from "../../actions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => {
    dispatch(filterUsers(e.target.value));
    setSearchValue(e.target.value);
  };
  const clearHandler = () => {
    dispatch(filterUsers(""));
    setSearchValue("");
  };
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
      {searchValue.length > 0 && (
        <FontAwesomeIcon icon={faTimes} onClick={clearHandler} />
      )}
    </div>
  );
};

export default SearchBar;
