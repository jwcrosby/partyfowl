import { Event } from "../models/event.js"
import axios from "axios"

const create = async (req,res) => {
    try {
        const existingEvent = await Event.find( {event_id: req.params.id})
        if (existingEvent.length){
            return res.status(200).json(existingEvent)
        } else {
            const newEvent = await Event.create({
                event_id: req.params.id,
                comments: [],
                user_photos: [],
                profiles_attending: [],
            })
            return res.status(200).json(newEvent)
        }
    } catch (error) {
        throw error
    }
}

const doesEventExist = async (req,res) => {
    try {
        const eventData = await Event.find({event_id: req.params.id}).populate("users_photos").populate("profiles_attending")
        if (eventData.length) {
            return res.status(200).json(eventData) 
        } else {
            return res.status(200).json(null) // event does exist in DB
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const createComment = async (req, res) => {
    console.log('hitting createComment ctrl')
    try {
        const event = await Event.findOne({event_id: req.params.id})
        console.log('event', event)
        console.log('req.body', req.body)
        const commentData = {
            content: req.body.content,
            event: event._id,
            owner: '611195502c4c894ef0bb6744'
        }


        console.log(commentData)
        event.comments.push(commentData)
        console.log('getting past push')
        await event.save()
        console.log('getting past save')
        const newComment = event.comments[event.comments.length - 1]
        return res.status(201).json(newComment)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const event = await Event.find({event_id: req.params.id})
        const idx = event.comments.findIndex((comment) =>
            comment.event_id.equals(req.params.comment_id)
        )
        const removedComment = event.comments.splice(idx, 1)
        await event.save()
        return res.status(200).json(removedComment)
    } catch (err) {
        res.json(err)
    }
}

function getAllEvents (req, res) {
    console.log("I'M HITTING GETALLEVENTS")
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=100&sort=random&apikey=${process.env.API_KEY}`)
    .then(response => {
        res.json(response.data)
    })
}

function getEventsByPostalCode (req,res) {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=${req.params.size}&postalCode=${req.params.postalCode}&apikey=${process.env.API_KEY}`)
    .then(response => {
        res.json(response.data)
    })
}

function getEventById (req,res){
    console.log("I'M HITTING THIS FUNCTION")
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/${req.params.id}.json?apikey=${process.env.API_KEY}`)
    .then(response => {
        res.json(response.data)
    })  
}


export {
    create,
    createComment,
    deleteComment,
    getAllEvents,
    getEventsByPostalCode,
    getEventById,
    doesEventExist, 
}

