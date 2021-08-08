import React from 'react'

//Components
// import Pagination from './Pagination'
import EventList from '../Event/EventList'


const Feed = (props) => {

    return (
        <>
            <div className="spacing-block" />
            <EventList
                {...props}
            />
        </>

    )
}

export default Feed
