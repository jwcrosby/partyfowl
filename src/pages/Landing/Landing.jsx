import React, { useEffect, useState } from "react";
import styles from './Landing.module.css'
import { getAllEvents, getEventsByPostalCode } from "../../../services/ticketmasterAPI";


const Landing = ({user}) => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getAllEvents().then((data) => setEventData(data.results));
  }, []);

  return (
    <main className={styles.container}>
      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
    </main>
  )
}

export default Landing