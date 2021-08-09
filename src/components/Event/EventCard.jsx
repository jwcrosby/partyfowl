import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

// Components
import EventMap from './EventMap'

const EventCard = (props) => {

  return (
    <>
    <Link to={{ pathname: `/events/${props.event.id}` , state: { event : props.event.id}}}>
    <div className="event-card">
      <div className="card-header">
        <h3>{props.event.name}</h3>
      </div>

        <div className="event-date">
          <h5>{props.event.dates.start.localDate}</h5>
        </div> 

        <div className="event-time">
          <h6>{props.event.dates.start.localTime}</h6>
        </div>

        <div className="event-image">
          <img className="img" src={props.event.images[3].url} alt="event"></img>
        </div>
      </div>
      </Link>
      {/* <EventMap
        event={props.event}
        {...props}
      /> */}
    </>
  );
};

export default EventCard;
