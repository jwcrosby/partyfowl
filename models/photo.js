import mongoose from 'mongoose'

const Schema = mongoose.Schema

const photoSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
    event: { type: mongoose.Schema.Types.ObjectId, ref : 'Event'}
}, { timestamps: true })

const Photo = mongoose.model('Photo', photoSchema)

export {
    Photo
}