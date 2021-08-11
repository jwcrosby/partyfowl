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
  const [eventExists, setEventExists] = useState(false);
  const [eventDetails, setEventDetails] = useState();
  const [commentArray, setCommentArray] = useState([]);

  const handleNewCommentClick = async() => {
      console.log("I'm in the handle Click")
      const res = await eventService.createEvent(id)
      console.log(res)
      setEventExists(true)
      // check if there is an event
      // if not, create one
      // Find event
  }


  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const event = await ticketService.getEventById(id)
        setEventDetails(event)
        // this returns a boolean on if the event is in the DB or not
        const res = await eventService.doesEventExist(id)
        console.log("HELLO", res)
        if (res ) {
          console.log("LALALA")
          setEventExists(true)
          console.log(eventExists)
        } else {
          console.log("ELSE")
        }
        // console.log(exists)
        // setEventExists(exists)

        // this returns event details

        // if event exists, populate photos and profiles


      } catch (error) {
        throw error
      }
    }
    fetchEvent()
  }, [id, eventExists])

  if (eventDetails === undefined) {
    // this is where we would add a loading animation
    return <>Still loading...</>;
  }
  return (
    <div>
      <div className="display-img">
        {/* can refactor to make it a carousel */}
        {/* need to make conditional for if no images */}
        <img src={eventDetails.images[0].url} alt="event" />
      </div>
      {/* <h1>{eventDetails.name}</h1> */}
      {eventExists ? <h1>Event Exists</h1>: null}

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
        <button onClick={() => handleNewCommentClick()}>Add comment</button>
      </div>
    </div>
  );
};

export default EventDetails;
