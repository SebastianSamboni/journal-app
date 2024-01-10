import { Router } from 'express'
import { authRequired } from '../middlewares/checkToken.js'
import { handleModelErrors } from '../middlewares/validation.js'
import {
    createAccount,
    loginAccount,
    logout
} from '../controllers/user.controller.js'
import { User } from '../models/user.model.js'

const router = Router()

router.post('/register', handleModelErrors(User), createAccount)
router.post('/login', loginAccount)
router.post('/logout', logout)

export default router