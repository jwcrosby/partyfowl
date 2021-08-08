import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

//Services
import {
  getAllEvents,
} from "../../services/ticketmasterAPI";

//Components
import Feed from '../../components/Feed/Feed'

const Landing = ({ user }) => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getAllEvents()
    .then((data) => {
      console.log(data._embedded.events)
      setEventData(data._embedded.events)});
  }, []);

  return (
      <main className={styles.container}>
        <div>
          <h1>ALL EVENT DATA</h1>
          <Feed
          events={eventData}></Feed>
        </div>
      </main>
  );
};

export default Landing;
