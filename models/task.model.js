import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
            isSameOrAfterStart: (value) => {
                if (new Date(value) <= new Date(this.start)) {
                    throw new Error('La fecha final debe ser la misma o después de la fecha de inicio!')
                }
            }
        }
    },
    subtasks_list: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    isReiterative: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    frecuency: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isIn: [
                [
                    'diario',
                    'semanal',
                    'quincenal',
                    'mensual',
                    'especifico'
                ]
            ]
        }
    }
}, {
    timestamps: false
})