import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  console.log(req.user)
  User.find({})
  .then(users => res.json(users))
}

function grabProfile(req,res) { 
  User.findById(req.params.id)
  .populate("profile")
  .then(user => res.json(user))
}

function populateEvents(req,res) {
  Profile.findById(req.params.id)
  .populate("events_attending")
  .populate("events_saved")
  .then(profile => res.json(profile))
}

export {
  index,
  grabProfile,
  populateEvents
}