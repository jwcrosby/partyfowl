import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ===========

router.get('/getAll', eventsCtrl.getAllEvents)
router.get('/getByPostal', eventsCtrl.getEventsByPostalCode)
router.get('/getEvent', eventsCtrl.getEventById)

// ========= Protected Routes ===========
router.use(decodeUserFromToken)

export {
    router
}

