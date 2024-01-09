import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Reward } from './reward.model.js'
import { Penance } from './penance.model.js'

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
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true 
    }
}, {
    timestamps: false
})

Reward.hasOne(Task, {
    foreignKey: 'reward_id',
    sourceKey: 'id'
})
Task.belongsTo(Reward, {
    foreignKey: 'reward_id',
    target: 'id'
})

Penance.hasOne(Task, {
    foreignKey: 'penance_id',
    sourceKey: 'id'
})
Task.belongsTo(Penance, {
    foreignKey: 'penance_id',
    target: 'id'
})