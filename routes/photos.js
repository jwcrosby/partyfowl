import { Router } from "express";
import * as photoCommentsCtrl from '../controllers/photos.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

// ============ Public Routes ============



// ============ Protected Routes =========
router.use(decodeUserFromToken)
router.post('/:id', checkAuth, photoCommentsCtrl.createPhotoComment)


export {
    router
}