import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Event.module.css'

const EventCard = (props) => {
// props should contain single event object containing all event data

    console.log("THE PROPS IN EVENT CARD", props)

    return (
        <div className="event-card">
            <div className="card-header">
                <h1>Insert Event Name</h1>
            </div>
            <div className="card-details">
                <h1>Insert Event Name</h1>
            </div>
            <div className="card-header">
                <h1>Insert Event Name</h1>
            </div>
        </div>
    )
}

export default EventCard