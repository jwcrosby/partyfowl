import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

const grabProfile = async(req,res) => {
  try {
    const user = await User.findById(req.params.id).populate("profile")
    const profile = await Profile.findById(user.profile._id).populate("events_attending").populate("events_saved")
    return res.status(201).json(profile)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export {
  index,
  grabProfile,
  
}