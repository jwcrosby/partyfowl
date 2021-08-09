import { User } from '../models/user.js'
import { Event } from '../models/event.js'

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



export {
    createComment
}