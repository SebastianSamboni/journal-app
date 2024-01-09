import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './task.model.js'

export const Calendar = sequelize.define('calendars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})

Calendar.hasMany(Task, {
    foreignKey: 'calendar_id',
    sourceKey: 'id'
})
Task.belongsTo(Calendar, {
    foreignKey: 'calendar_id',
    target: 'id'
})