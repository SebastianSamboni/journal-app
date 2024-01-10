import { User } from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const createAccount = async (req, res) => {
    const { name, last_name, nickname, email, password, cellphone } = req.body
    try {
        const pwdHash = await bcrypt.hash(password, 10)
        const newUser = User.create({
            name,
            last_name,
            nickname,
            email,
            password: pwdHash,
            cellphone,
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}