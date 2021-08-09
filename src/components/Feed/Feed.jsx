import React from 'react'

//Components
import SearchHeader from './SearchHeader'
import EventList from '../Event/EventList'


const Feed = (props) => {

    return (
        <>
            <SearchHeader {...props} />
            <div className="spacing-block" />
            <EventList
                {...props}
            />
        </>

    )
}

export default Feed
