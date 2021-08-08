import React from 'react'

//Components
// import Pagination from './Pagination'
import Pagination from './Pagination'
import EventList from '../Event/EventList'


const Feed = (props) => {

    return (
        <>
            <Pagination {...props} />
            <div className="spacing-block" />
            <EventList
                {...props}
            />
        </>

    )
}

export default Feed
