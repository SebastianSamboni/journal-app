import { Op } from 'sequelize'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import { User } from '../models/user.model.js'

export const createAccount = async (req, res) => {
    const { name, last_name, nickname, email, password, cellphone, level_id } = req.body
    try {
        if (!password || password.length < 8 || password.length > 20) {
            return res.status(400).json({
                error: 'La contraseña debe tener entre 8 y 20 caracteres!'
            })
        }
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                error: 'La contraseña debe contener al menos una letra y un número'
            })
        }

        const pwdHash = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name,
            last_name,
            nickname,
            email,
            password: pwdHash,
            cellphone,
            level_id
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const loginAccount = async (req, res) => {
    const { identifier, password } = req.body
    try {
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { nickname: identifier },
                    { email: identifier }
                ]
            }
        })
        if (!user) {
            return res.status(404).json({
                error: 'Nombre de Usuario o Correo no existen!'
            })    
        }

        if (!password || password.length < 8 || password.length > 20) {
        return res.status(400).json({
            error: 'La contraseña debe tener entre 8 y 20 caracteres!'
        })
        }
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                error: 'La contraseña debe contener al menos una letra y un número!'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta!' })
        }
        
        const token = await createAccessToken(user)
        res.cookie('token', token)
        res.status(200).json({
            user,
            message: 'Inicio de sesión exitoso!'
        })

    } catch (error) {
        res.status(500).json({
            error: 'Error en la autenticación!',
            message: error.message
        })
    }
}

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}