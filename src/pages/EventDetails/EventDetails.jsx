import React from 'react'
import { useParams } from 'react-router-dom'
import './EventDetails.css'

// Services


// Components


// Assets?


const EventDetails = (props) => {
    console.log(props)
    
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <div className="display-img">
                <img src="https://i.imgur.com/30lQ0dl.png" alt="placeholder"/>
            </div>
        </div>
    )
}

export default EventDetails