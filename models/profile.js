import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    eventsAttending: { type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    eventsSaved: { type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    photos: { type: mongoose.Schema.Types.ObjectId, ref: 'Photo'},
    friends: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
}, { timestamps: true})

const Profile = mongoose.model('Profile', profileSchema)

export {
    Profile
}