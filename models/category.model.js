import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './task.model.js'
import { Hobby } from './hobby.model.js'

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

Category.hasMany(Task, {
    foreignKey: 'category_id',
    sourceKey: 'id'
})
Task.belongsTo(Category, {
    foreignKey: 'category_id',
    target: 'id'
})

Category.hasMany(Hobby, {
    foreignKey: 'category_id',
    sourceKey: 'id'
})
Hobby.belongsTo(Category, {
    foreignKey: 'category_id',
    target: 'id'
})