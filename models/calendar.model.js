import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Calendar = sequelize.define('calendars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})