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
    const [eventImages, setEventImages] = useState({})


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
                <img src="https://i.imgur.com/30lQ0dl.png" alt="placeholder"/>
            </div>
        </div>
    )
}

export default EventDetails