import { User } from '../models/user.js'

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

export {
  index,
  grabProfile,
}