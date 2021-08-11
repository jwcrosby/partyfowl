import { Event } from "../models/event.js"
import axios from "axios"

function create (req, res) { 
    Event.find( {event_id: req.params.id}, function (err, results) {
        if (!results.length) {
            Event.create({
                event_id: req.params.id,
                comments: [],
                user_photos: [],
                profiles_attending: [],
            })
            .catch(err => {
                console.log(err)
            })
        }
    })
}

// function doesEventExist (req,res) {
//     console.log("I'm in doesEventExist")
//     Event.find( {event_id: req.params.id}, function (err, results){
//         if (!results.length) {
//             return false //event doesn't exist in DB
//         } else {
//             return true //event does exist in DB
//         }
//     })
// }

const doesEventExist = async (req,res) => {
    try {
        const event = await Event.find({event_id: req.params.id})
        if (!!event.length) {
            return false // event doesn't exist in DB
        } else {
            return true // event does exit in DB
        }
    } catch (err) {
        res.status(400).send(err.message)
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
    doesEventExist
}

