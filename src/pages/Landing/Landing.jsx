import React, { useEffect, useState } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import styles from "./Landing.module.css";
import {
  getAllEvents,
  getEventsByPostalCode,
} from "../../services/ticketmasterAPI";

const Landing = ({ user }) => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getAllEvents().then((data) => setEventData(data.results));
  }, []);

  return (
    <main className={styles.container}>
      eventData &&
      <div>
        <h1>ALL EVENT DATA</h1>
        <div className="all-events">
          {eventData.map((event, index) => (
            <Link to={{ pathname: "/events/" + index, state: event }}>
              <div className="events" key={index}>
                <div className="event-name">{event.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
