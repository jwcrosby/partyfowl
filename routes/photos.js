import { Router } from "express";
import * as photoCommentsCtrl from '../controllers/photos.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

// ============ Public Routes ============
router.post('/:id', photoCommentsCtrl.createPhotoComment)

// ============ Protected Routes =========
router.use(decodeUserFromToken)
router.delete('/:event_id/photoComments/:photoComment_id', checkAuth, photoCommentsCtrl.deletePhotoComment)

export {
    router
}