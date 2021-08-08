import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

//Services
import {
  getAllEvents,
} from "../../services/ticketmasterAPI";

//Components
import Feed from '../components/Feed/Feed'

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
          <Feed></Feed>
          <div>
          {eventData?.map((event, index) => (
            <Link to={{ pathname: "/events/" + event.id, state: event }}>
            <div className="events" key={index}>
              <div className="event-name">{event.name}</div>
              <div className="event-date">{event.dates.start.localDate}</div>
              <div className="event-time">{event.dates.start.localTime}</div>
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
