import React from "react";
import { useHistory } from "react-router-dom";
import "./Pagination.css";

//Components
import Search from "./Search";

//Services
import { search } from "../../services/searchService";

const Pagination = (props) => {
  const history = useHistory();
  const {
    eventData,
    setEventData,

    changePage,
    currentPage,

    keyword,
    setKeyword,

    clearSearch,
    hasSearchRun,
    setHasSearchRun,
  } = props;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setHasSearchRun(true);
      const data = await search(keyword);
      console.log(data);
      setEventData(data._embedded.events);
      history.push("/");
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="hidden-container">
      <div className="header">
        <h3 className="h3-search">
          {!hasSearchRun ? "Enter Zip Code" : `Search Results: ${keyword}`}
        </h3>

        {!hasSearchRun && (
          <Search
            {...props}
            handleSearch={handleSearch}
            handleChange={handleChange}
          />
        )}

        <div className="header-buttons">
          {!hasSearchRun ? (
            <>
              {currentPage > 0 && (
                <button value="-1" onClick={(e) => changePage(e)}>
                  Back
                </button>
              )}

              {eventData.length === 8 && (
                <button value="1" onClick={(e) => changePage(e)}>
                  Next
                </button>
              )}
            </>
          ) : (
            <>
              {hasSearchRun && (
                <button onClick={clearSearch}>Clear Results</button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
