import { Event } from "../models/event.js"
import { Profile } from "../models/profile.js"
import axios from "axios"

const create = async (req,res) => {
    try {
        const newEvent = await Event.create({
            event_id: req.params.id,
            comments: [],
            user_photos: [],
            profiles_attending: [],
        })
        return res.status(200).json(newEvent)
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

const saveEvent = async (req,res) => {
    try {
        const currentEvent = await Event.findById(req.params.id)
        const currentProfile = await Profile.findById(req.params.profile)

        currentEvent.profiles_attending.push(currentProfile)
        currentProfile.events_attending.push(currentEvent)

        await currentEvent.save()
        await currentProfile.save()

        // does this need to return anything?

    } catch (error) {
        res.status(400).send(error.message)
    }
}



const createComment = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        event.comments.push(req.body)
        await event.save()
        const newComment = event.comments[event.comments.length - 1]
        return res.status(201).json(newComment)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const event = await Event.findById(req.params.event_id)
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
    saveEvent 
}

