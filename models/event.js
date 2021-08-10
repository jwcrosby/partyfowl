import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
}, { timestamps: true})

const eventSchema = new Schema({
    event_id: {
        type: String,
    },
    description: {
        type: String
    },
    title: {
        type: String
    },
    location: {
        type: String
    },
    start_date_time: {
        type: Date
    },
    end_date_time: {
        type: Date
    },
    event_photo: {
        type: String
    },
    is_past: {
        type: Boolean,
        default: false
    },
    min_price: {
        type: Number
    },
    max_price: {
        type: Number
    },
    event_site: {
        type: String
    },
    ticket_site: {
        type: String
    },
    comments: [commentSchema],
    user_photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}],
    profiles_attending: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}],
}, { timestamps: true })

const Event = mongoose.model('Event', eventSchema)

export {
    Event
}