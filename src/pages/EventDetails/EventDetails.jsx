import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './EventDetails.css'

// Services
import * as ticketService from "../../services/ticketmasterAPI";

// Components


// Assets?


const EventDetails = () => {
    const { id } = useParams()
    const [eventDetails, setEventDetails] = useState()

    useEffect(() => {
        ticketService.getEventById(id)
        .then (event => setEventDetails(event))
    }, [id])
    
    if ( eventDetails === undefined ){

        return (
            <>
            Still loading...
            </>
        )
    }
    return (
        <div>
            <div className="display-img">
                {/* can refactor to make it a carousel */}
                {/* need to make conditional for if no images */}
                <img src={eventDetails.images[0].url} alt="event"/>
            </div>
            <h1>{eventDetails.name}</h1>
            <div className="description">
                <p>Description: {eventDetails.description}</p>
            </div>
            <div className="datetime">
                <p>Timezone: {eventDetails.dates.timezone}</p>
            </div>
            
        </div>
    )
}

export default EventDetails