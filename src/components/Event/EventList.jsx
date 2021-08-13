import React from 'react'

// Components
import EventCard from './EventCard'

const EventList = (props) => {
    const {eventsArray} = props
    return (
        <div className="event-list">
            {eventsArray?.map((event) => (
                <EventCard
                    key={event.id}
                    event={event}
                    {...props}
                />
            ))}
        </div>
    )
}

export default EventList