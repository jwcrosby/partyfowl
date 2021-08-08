import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Event.module.css'

// Components
import EventCard from './EventCard'


const EventList = (props) => {
// assuming/setting props as an array of event object ids?

    console.log('EVENT LIST!!')

    return (
        props.map((event) => (
            <EventCard
                key={event._id}
                event={event}
                {...props}
            />
        ))
    )
}

export default EventList