import React, { useState, useEffect } from 'react'
import * as userService from '../../services/userService'
import styles from './Profile.module.css'

const Profile = (props) => {
    console.log(props)

    const [userProfile,setUserProfile] = useState()

    // onClick function


    useEffect(() => {
        userService.getUserProfile()
        .then (user => setUserProfile(user))
    }, [])
   
    return (
        <main  className={styles.container}>
            <h1>PROFILE PAGE</h1> 
            
        </main>        
    )
}

export default Profile

