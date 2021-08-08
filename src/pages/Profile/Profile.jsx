import React, { useState, useEffect } from 'react'
import * as userService from '../../services/userService'
import styles from './Profile.module.css'

const Profile = (props) => {
    const [userProfile,setUserProfile] = useState()

    // onClick function
   
    useEffect(() => {
        userService.getUserProfile(props.user._id)
        .then (user => setUserProfile(user))
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
            {/* <p>{userProfile}</p> */}
            <img src={userProfile.profile.avatar} alt="user avatar"/>
            <h1>{userProfile.profile.name}</h1>
            <p>{userProfile.profile.location}</p>
            <p>Interested in ___</p>
            <div>
                Past Events
            </div>
            <div>
                Saved Events
            </div>
            <div>
                Upcoming Events
            </div>
            
        </main>        
    )
}


export default Profile

