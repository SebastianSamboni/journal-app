import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'unique_nickname',
            msg: 'Ya existe un usuario registrado con este nombre de usuario.'
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'unique_email',
            msg: 'Ya existe un usuario registrado con este correo.'
        },
        validate: {
            isEmail: {
                msg: 'El formato de correo no es válido'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cellphone: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null,
        validate: {
            isNumeric: {
                args: [10],
                msg: 'El número que ingresaste no es válido'
            }
        }
    },
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'default.jpg'
    }
}, {
    timestamps: false
})