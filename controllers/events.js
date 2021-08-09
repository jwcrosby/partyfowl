import axios from "axios"

// when you combine event.js controller files, be sure to also change routing

function getAllEvents (req, res) {
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


export {
    getAllEvents,
    getEventsByPostalCode
}

