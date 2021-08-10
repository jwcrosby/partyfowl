import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = (props) => {

  return (
    <>
    <Link to={{ pathname: `/events/${props.event.id}` , state: { event : props.event.id}}}>
    <div className="event-card">
        <div className="event-image">
          <img className="img-event" src={props.event.images[3].url} alt="event"></img>
        </div>
        <div className='card-text'>
      <div className="card-header">
        <h3 className='card-details'>{props.event.name}</h3>
      </div>

        <div className="event-date">
          <h5 className='card-details'>{props.event.dates.start.localDate}</h5>
        </div> 

        <div className="event-time">
          <h6 className='card-details'>{props.event.dates.start.localTime}</h6>
        </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default EventCard;
