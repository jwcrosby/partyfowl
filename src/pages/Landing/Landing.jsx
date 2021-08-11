import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";
import styles from "./Landing.module.css";
import headerImg from '../../components/images/landing-img.png'


//Services
import { getAllEvents } from "../../services/ticketmasterAPI";

//Components
import Feed from "../../components/Feed/Feed";

const Landing = ({ user }) => {
  const [eventData, setEventData] = useState([]);

  const prevEventDataState = usePrevious(eventData);
  const [keyword, setKeyword] = useState("");
  const [hasSearchRun, setHasSearchRun] = useState(false);

  const clearSearch = () => {
    setKeyword("");
    setHasSearchRun(false);
    setEventData(prevEventDataState);
  };

  useEffect(() => {
    getAllEvents().then((data) => {
      data.hasOwnProperty("_embedded")
        ? setEventData(data._embedded.events)
        : setEventData([]);
    });
  }, []);

  return (
    <main className={styles.container}>
      <div>
        {/* <img className='landing-img' src={headerImg} alt="A Stage" /> */}
        <Feed className='feed-parent'
          eventData={eventData}
          setEventData={setEventData}
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
