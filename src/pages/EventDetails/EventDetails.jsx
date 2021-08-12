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
  const profile = props.user.profile
  const [eventExists, setEventExists] = useState(false)
  const [eventDetails, setEventDetails] = useState()
  const [dbEventDetails, setDbEventDetails] = useState()

  const [commentsArray, setCommentsArray] = useState([])
  const [photosArray, setPhotosArray] = useState([])
  const [profilesArray, setProfilesArray] = useState([])

  
  const createEventOnClick = async() => {
    const res = await eventService.createEvent(id)
    setEventExists(true)
    setDbEventDetails(res)
    setCommentsArray(res.comments)
    setPhotosArray(res.user_photos)
    setProfilesArray(res.profiles_attending)
  }


  const handleAttendClick = async() => {
    if (!eventExists) {
      await createEventOnClick()
    } 
    const updatedArray = await eventService.createUserAttendsEvent(id, profile)
    setProfilesArray(updatedArray)
  }
  

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        
        // if event exists, returns populated eventData; else, returns null
        const res = await eventService.doesEventExist(id)
        if (res) {
          setEventExists(true)
          setDbEventDetails(res[0]) // may not really need this if we're saving info in separate states
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
          <div className="attending-users">
            {eventExists && 
              <div>
                <p><strong>List of Profiles Attending</strong></p>
                {profilesArray.map((profile) => (
                    <div className="profile-listing">
                        <img src={profile.avatar} alt="avatar" />
                        {profile.name}
                    </div>
                ))}
              </div>
            }
           
            
          </div>

          
          <button className='comment-btn' onClick={() => handleAttendClick()}>
            I'm Attending This Event
          </button>
                   
              
        </div>
      </div>

      <div className="comments">
       
        {!eventExists && 
          <button className='comment-btn' onClick={() => createEventOnClick()}>
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

      <div className="user-photos">
        {!eventExists && 
            <button className='comment-btn' onClick={() => createEventOnClick()}>
              Add The First Photo!
            </button>
          }
        {eventExists && 
          <h2>Placeholder for PhotoSection</h2>
          // <PhotoSection 
          //   eventId={id}
          //   photosArray={photosArray}
          //   setPhotosArray={setPhotosArray}
          // />
        } 
      </div>
    </div>
  );
};

export default EventDetails;
