import React, { useState, useEffect } from 'react'
import profileStyles from './Profile.module.css'

// Services
import * as userService from '../../services/userService'

// Components
import EventList from '../../components/Event/EventList'

const Profile = (props) => {
    const [userProfile,setUserProfile] = useState()

   
    useEffect(() => {
        const fetchProfile = async() => {
            try {
                const res = await userService.getUserProfile(props.user._id)
                console.log("THIS IS THE RESPONSEEEEE", res)
                setUserProfile(res)
            }catch (error) {
                throw error
            }
        }
        fetchProfile()

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
        <main  className={profileStyles.container}>
            <h1 className={profileStyles.name}>{userProfile.name}</h1>
            {/* <h1>PROFILE PAGE</h1>  */}
            <div className={profileStyles.avatarInfo}>
                <img className={profileStyles.avatar} src={userProfile.avatar} alt="user avatar"/>
                <section className={profileStyles.info}>
                <p>{userProfile.location}</p>
                <p>Interested in ___</p>
                </section>
            </div>
            {/* <div>
                Past Events
                <EventList eventsArray={userProfile} />
            </div> */}
            <section className={profileStyles.eventsProfile}>
                
                {/* <div className={profileStyles.eventsAttendance}>
                    Saved Events
                    <EventList eventsArray={userProfile.profile.events_saved} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, iste, consectetur dicta similique eaque debitis temporibus inventore earum ratione nostrum veniam sed, doloribus dignissimos sint aut dolore atque dolorum nulla.</p>
                </div> */}
                <div className={profileStyles.eventsAttendance}>
                    Upcoming Events
                    <EventList eventsArray={userProfile.events_attending} />
                    <p>Lorem      ipsum dolor sit, amet consectetur adipisicing elit. Rem, iste, consectetur dicta similique eaque debitis temporibus inventore earum ratione nostrum veniam sed, doloribus dignissimos sint aut dolore atque dolorum nulla.</p>
                </div>
            </section>
            
        </main>        
    )
}


export default Profile

