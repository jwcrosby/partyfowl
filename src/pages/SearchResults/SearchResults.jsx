import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";
import styles from "./SearchResults.module.css";
import SearchResultsMap from "../../components/SearchResultFeed/SearchResultsMap";

//Services
import { getEventsByPostalCode } from "../../services/ticketmasterAPI";

//Components
import Feed from "../../components/Feed/Feed";

const SearchResults = ({ user }) => {
  const zipcode = 80202;
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getEventsByPostalCode(20, 80202).then((data) => {
      console.log(data, "getAllEvents data");

      data.hasOwnProperty("_embedded")
        ? setEventData(data._embedded.events)
        : setEventData([]);
    });
  }, []);

  return (
    <main className={styles.container}>
      <div>
        <h1 className="landing-h1">Search Results</h1>

        <SearchResultsMap eventData={eventData} />
      </div>
    </main>
  );
};

export default SearchResults;
