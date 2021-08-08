import React from 'react'
import { NavLink } from 'react-router-dom'


const EventCard = (props) => {
// props should contain single event object containing all event data

    console.log("THE PROPS IN EVENT CARD", props)

    return (
        <div className="event-card">
            <div className="card-header">
                <h1>Insert Event Name</h1>
            </div>
            <div className="card-details">
                <p>Insert Location</p>
            </div>
            <div className="card-details">
                <p>Insert Event Name</p>
            </div>
            <div className="card-image">
                <img src="https://i.imgur.com/30lQ0dl.png" alt="event"/>
            </div>
        </div>
    )
}

export default EventCard