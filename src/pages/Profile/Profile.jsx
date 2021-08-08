import React, { useState, useEffect } from 'react'
import * as userService from '../../services/userService'
import styles from './Profile.module.css'

const Profile = (props) => {
    const [userProfile,setUserProfile] = useState()

    // onClick function


    useEffect(() => {
        userService.getUserProfile(props.user._id)

        // .then (user => setUserProfile(user))
    }, [props])
   
    return (
        <main  className={styles.container}>
            <h1>PROFILE PAGE</h1> 
            
        </main>        
    )
}

export default Profile

