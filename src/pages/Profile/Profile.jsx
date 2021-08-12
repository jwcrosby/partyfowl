import React, { useState, useEffect } from 'react'
import profileStyles from './Profile.module.css'

// Services
import * as userService from '../../services/userService'
import * as ticketService from '../../services/ticketmasterAPI'

// Components
import EventList from '../../components/Event/EventList'

const Profile = (props) => {
    const [userProfile,setUserProfile] = useState()
    const [eventsAttending, setEventsAttending] = useState(null)
   
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
    
    useEffect(() => {
        const fetchEvent = async() => {
            try {
                if (userProfile){
                    const eventslist = userProfile.events_attending
                    
                    let list = []
                    eventslist.map( async (event) => {
                        const id = event.event_id
                        const res = await ticketService.getEventById(id)
                        list.push(res)
                    })
                    console.log("LIST OF EVENTS", list)
                    setEventsAttending(list)
                }

            } catch (error) {
                throw error
            }
        }
        fetchEvent()
    },[userProfile])

    if ( userProfile === undefined){
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
                {eventsAttending !== null &&
                <div className={profileStyles.eventsAttendance}>
                    <h3> Upcoming Events </h3>
                    <p>{eventsAttending}</p>
                    {/* {eventsAttending.map((event) => (
                        <p>{event.name}</p>
                    ))} */}
                </div>
                }
            </section>
            
        </main>        
    )
}


export default Profile

