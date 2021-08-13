import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, usersCtrl.index)
// router.get('/populateEvents/:id', checkAuth, usersCtrl.populateEvents)
router.get('/:id', checkAuth, usersCtrl.grabProfile)


export { router }