import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import {
  getAllEvents,
} from "../../services/ticketmasterAPI";

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
          <div>
          {eventData?.map((event, index) => (
            <Link to={{ pathname: "/events/" + event.id, state: event }}>
            <div className="events" key={index}>
              <div className="event-name">{event.name}</div>
              <div className="event-type">{event.type}</div>
              <img className={styles.img} src={event.images[3].url} alt="event"></img>
            </div>
            </Link>
            ))}
          </div>
        </div>
      </main>
  );
};

export default Landing;
