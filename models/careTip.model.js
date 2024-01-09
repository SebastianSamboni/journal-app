import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const CareTip = sequelize.define('care_tips', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})