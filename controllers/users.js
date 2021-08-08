import { User } from '../models/user.js'

function index(req, res) {
  console.log(req.user)
  User.find({})
  .then(users => res.json(users))
}

function grabProfile(req,res) {
  console.log("I'M IN GRAB PROFILE!!!")
}

export {
  index,
  grabProfile,
}