import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Category = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '#eeeeee',
        validate: {
            len: {
                args: [7],
                msg: 'Valor de color no válido.'
            }
        }
    }
}, {
    timestamps: false
})