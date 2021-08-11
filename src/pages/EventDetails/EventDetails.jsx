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
  const [eventExists, setEventExists] = useState(false)
  const [eventDetails, setEventDetails] = useState()
  const [dbEventDetails, setDbEventDetails] = useState()

  const [commentsArray, setCommentsArray] = useState([])
  const [photosArray, setPhotosArray] = useState([])
  const [profileaArray, setProfilesArray] = useState([])

  const handleFirstCommentClick = async() => {
      const res = await eventService.createEvent(id)
      setEventExists(true)
      setDbEventDetails(res)
      // do i even need to check for existing event in my controller??
  }

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // if event exists, returns populated eventData; else, returns null
        const res = await eventService.doesEventExist(id)
        console.log(res[0])
        if (res) {
          setEventExists(true)
          setDbEventDetails(res[0])
        } else {
          setEventExists(false)
        }

        // returns ticketmaster event details
        const event = await ticketService.getEventById(id)
        setEventDetails(event)
      } catch (error) {
        throw error
      }
    }
    fetchEvent()
  }, [id, eventExists])

  if (eventDetails === undefined) {
    return <>Still loading...</>; // add a loading animation here
  }
  return (
    <div>
      <div className="display-img"> {/* need to make conditional for if no images */}
        <img src={eventDetails.images[0].url} alt="event" />
      </div>
      <h1>{eventDetails.name}</h1>
      {eventExists ? <h2>Event Exists - TESTING CONDITIONAL RENDERING</h2>: null}

      {/* <EventDetailsMap 
        eventDetails={eventDetails}
      /> */}

      <div className="description">
        <p>Description: {eventDetails.description}</p>
      </div>
      <div className="datetime">
        <p>Timezone: {eventDetails.dates.timezone}</p>
      </div>
      <div className="comments">
        {/* <CommentSection
          eventId={ id }
          commentArray={commentArray}
          setCommentArray={setCommentArray}
        /> */}
        <button onClick={() => handleFirstCommentClick()}>Add comment</button>
      </div>
    </div>
  );
};

export default EventDetails;
