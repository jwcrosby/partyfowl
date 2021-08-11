import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

// Services
import * as ticketService from "../../services/ticketmasterAPI";
import * as eventService from "../../services/eventService"

// Components
import CommentSection from "../../components/Comment/CommentSection";
import EventDetailsMap from "../../components/Event/EventDetailsMap";

// Assets?

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState();
  const [commentArray, setCommentArray] = useState([]);

  const handleNewCommentClick = async() => {
      console.log("I'm in the handle Click")
      await eventService.createEvent(id)
      // check if there is an event
      // if not, create one
      // Find event
  }

  useEffect(() => {
    ticketService.getEventById(id).then((event) => setEventDetails(event));
  }, [id]);

  if (eventDetails === undefined) {
    return <>Still loading...</>;
  }
  return (
    <div className='details-div'>
      <h1 className='details-h1'>{eventDetails.name}</h1>
      <div className="display-img">
        {/* can refactor to make it a carousel */}
        {/* need to make conditional for if no images */}
        <img className='details-img' src={eventDetails.images[0].url} alt="event" />
      </div>

      <div className='map-n-details'>
        <EventDetailsMap 
          eventDetails={eventDetails}
        />
        <div className='details-text'>
          <div className="description">
            <p>Description: {eventDetails.description}</p>
          </div>
          <div className="datetime">
            <p>Timezone: {eventDetails.dates.timezone}</p>
          </div>
        </div>
      </div>
      <div className="comments">
        {/* <CommentSection
          eventId={ id }
          commentArray={commentArray}
          setCommentArray={setCommentArray}
        /> */}
        <button className='comment-btn' onClick={() => handleNewCommentClick()}>Add comment</button>
      </div>
    </div>
  );
};

export default EventDetails;
