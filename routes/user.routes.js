import { Router } from 'express'
import { validateModel } from '../middlewares/validator.js'
import { createAccount } from '../controllers/user.controller.js'
import { User } from '../models/user.model.js'

const router = Router()

router.post('/register', validateModel(User), createAccount)

export default router