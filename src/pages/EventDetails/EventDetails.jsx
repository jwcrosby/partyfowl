import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

// Services
import * as ticketService from "../../services/ticketmasterAPI";
import * as eventService from "../../services/eventService"

// Components
import CommentSection from "../../components/Comment/CommentSection";
import EventDetailsMap from "../../components/Event/EventDetailsMap";
import { PromiseProvider } from "mongoose";

// Assets?

const EventDetails = (props) => {
  const { id } = useParams();
  const [eventExists, setEventExists] = useState(false)
  const [eventDetails, setEventDetails] = useState()
  const [dbEventDetails, setDbEventDetails] = useState()

  const [commentsArray, setCommentsArray] = useState([])
  const [photosArray, setPhotosArray] = useState([])
  const [profilesArray, setProfilesArray] = useState([])

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
        if (res) {
          setEventExists(true)
          setDbEventDetails(res[0])
          setCommentsArray(res[0].comments)
          setPhotosArray(res[0].user_photos)
          setProfilesArray(res[0].profiles_attending)
          
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

  // useEffect(() =>{
  //   if (eventExists) {
  //     setCommentsArray(dbEventDetails.comments)
  //     setPhotosArray(dbEventDetails.user_photos)
  //     setProfilesArray(dbEventDetails.profiles_attending)
  //   }
  // },[eventExists, dbEventDetails])

  if (eventDetails === undefined) {
    return <>Still loading...</>; // add a loading animation here
  }
  return (
    
    <div className='details-div'>
      <h1 className='details-h1'>{eventDetails.name}</h1>
        {eventExists ? <h2>Event Exists - TESTING CONDITIONAL RENDERING</h2>: <h2>Event Doesn't Exist</h2>}
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
       
        {!eventExists && 
          <button className='comment-btn' onClick={() => handleFirstCommentClick()}>
            Make The First Comment!
          </button>
        }
        {eventExists && 
          <CommentSection
            user={props.user}
            eventId={id}
            commentsArray={commentsArray}
            setCommentsArray={setCommentsArray}
          />
        } 
        
      </div>
    </div>
  );
};

export default EventDetails;
