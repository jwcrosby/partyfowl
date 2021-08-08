import React from "react";
import SearchIcon from "../../assets/icons/search.png";

const Search = (props) => {
  return (
    <div className="search-container">
      <form className="search" onSubmit={props.handleSearch}>
        <img
          className="search-icon"
          src={SearchIcon}
          alt="magnifying glass"
        ></img>
        <input
          autoComplete="off"
          placeholder="Search"
          name="keyword"
          value={props.keyword}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
