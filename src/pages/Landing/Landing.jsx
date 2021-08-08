import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";
import styles from "./Landing.module.css";

//Services
import { getAllEvents } from "../../services/ticketmasterAPI";

//Components
import Feed from "../../components/Feed/Feed";

const Landing = ({ user }) => {
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const prevEventDataState = usePrevious(eventData);
  const [keyword, setKeyword] = useState("");
  const [hasSearchRun, setHasSearchRun] = useState(false);

  const clearSearch = () => {
    setKeyword("");
    setHasSearchRun(false);
    setEventData(prevEventDataState);
  };

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + parseInt(e.target.value));
  };

  useEffect(() => {
    getAllEvents().then((data) => {
      console.log(data._embedded.events);
      setEventData(data._embedded.events);
    });
  }, []);

  return (
    <main className={styles.container}>
      <div>
        <h1>LANDING</h1>
        <Feed
          eventData={eventData}
          setEventData={setEventData}
          changePage={changePage}
          currentPage={currentPage}
          keyword={keyword}
          setKeyword={setKeyword}
          clearSearch={clearSearch}
          hasSearchRun={hasSearchRun}
          setHasSearchRun={setHasSearchRun}
        />
      </div>
    </main>
  );
};

export default Landing;
