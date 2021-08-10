import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css'

// Services
import * as userService from '../../services/userService'
import * as ticketService from "../../services/ticketmasterAPI";

// Components
import EventList from '../../components/Event/EventList'

const Profile = (props) => {
    const [userProfile,setUserProfile] = useState()

   
    useEffect(() => {
        userService.getUserProfile(props.user._id)
        .then (user => {
            setUserProfile(user)
            ticketService.populateEvents(user.profile._id)
        })
    }, [props])
    

    if ( userProfile === undefined ){
        return (
            <>
            Still loading...
            {/* we can insert loading animation here in the future */}
            </>
        )
    }
    return (
        <main  className={styles.container}>
            <h1>PROFILE PAGE</h1> 
            <img src={userProfile.profile.avatar} alt="user avatar"/>
            <h1>{userProfile.profile.name}</h1>
            <p>{userProfile.profile.location}</p>
            <p>Interested in ___</p>
            <div>
                Past Events
                <EventList />
            </div>
            <div>
                Saved Events
                <EventList />
            </div>
            <div>
                Upcoming Events
                <EventList />
            </div>
            
        </main>        
    )
}


export default Profile

