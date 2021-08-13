import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import profileStyles from './Profile.module.css'

// Services
import * as userService from '../../services/userService'

const Profile = (props) => {
    const {_id} = props.user || {}
    const [userProfile,setUserProfile] = useState()
   
    useEffect(() => {
        const fetchProfile = async() => {
            try {
                const res = await userService.getUserProfile(_id)
                setUserProfile(res) 
            }catch (error) {
                throw error
            }
        }
        fetchProfile()
    },[_id])

    if ( userProfile === undefined){
        return (
            <>
            Still loading...
            </>
        )
    }
    return (
        <main  className={profileStyles.container}>
            <h1 className={profileStyles.name}>{userProfile.name}</h1>
            <div className={profileStyles.avatarInfo}>
                <img className={profileStyles.avatar} src={userProfile.avatar} alt="user avatar"/>
                <section className={profileStyles.info}>
                <p>Location (zipcode): {userProfile.location}</p>
                <p>Joined the Gaggle community on: </p>
                </section>
            </div>
           
            <section className={profileStyles.eventsProfile}>
                <div className={profileStyles.eventsAttendance}>
                    <h3> Upcoming Events </h3>
                    {userProfile.events_attending.map((event) => (
                       <div>
                        <Link to={{ pathname: `/events/${event.event_id}` , state: { event : event.event_id}}}>
                            {event.title}
                        </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>        
    )
}

export default Profile

