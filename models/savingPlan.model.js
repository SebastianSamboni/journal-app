import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const SavingPlan = sequelize.define('saving_plans', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    objective: {
        type: DataTypes.STRING,
        allowNull: false
    },
    goal: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            min: {
                args: [200000],
                msg: 'El objetivo debe ser al menos de 200000!'
            }
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [3],
                msg: 'La duración mínima debe ser de 3 meses!'
            },
        }
    },
    frecuency: {
        type: DataTypes.ENUM('daily', 'weekly', 'biweekly', 'monthly'),
        allowNull: false
    },
    amount: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    accumulated_amount: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    timestamps: false
})