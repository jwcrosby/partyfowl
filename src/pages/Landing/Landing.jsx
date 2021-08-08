import React, { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import {
  getAllEvents,
} from "../../services/ticketmasterAPI";

const Landing = ({ user }) => {
  const [eventData, setEventData] = useState({});

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
          <div>
          {/* {eventData?.map((event, index) => (
                <p>{index}</p>
            ))}  */}
          </div>
        </div>
      </main>
  );
};

export default Landing;
