import { Router } from "express";
import * as photoCommentsCtrl from '../controllers/photos.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

// ============ Public Routes ============



// ============ Protected Routes =========
router.use(decodeUserFromToken)
router.post('/:id', checkAuth, photoCommentsCtrl.createPhotoComment)
router.delete('/:event_id/photoComments/:photoComment_id', checkAuth, photoCommentsCtrl.deletePhotoComment)


export {
    router
}