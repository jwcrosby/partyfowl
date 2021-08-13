import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = (props) => {

  const oldDate = new Date(props.event.dates.start.localDate)
  const date = oldDate.toDateString()

  function tConvert (time) {
    if (time === undefined) {
      return 'No time given'
    } else {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
      if (time.length > 1) {                      // If time format correct
        time = time.slice (1);                    // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM';  // Set AM/PM
        time[0] = +time[0] % 12 || 12;            // Adjust hours
    }
      return time.join (''); // return adjusted time or original string
    }
  }
  const newTime = tConvert(props.event.dates.start.localTime)
  
  
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
          <h5 className='card-details'>{date}</h5>
        </div> 

        <div className="event-time">
          <h6 className='card-details'>{newTime}</h6>
        </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default EventCard;
