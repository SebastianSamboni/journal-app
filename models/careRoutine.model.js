import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const CareRoutine = sequelize.define('care_routines', {
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
        allowNull: false
    },
    routine_type: {
        type: DataTypes.ENUM(['Ejercicio', 'Alimentación', 'Cuidado Facial', 'Cuidado Capilar']),
        allowNull: false,
        validate: {
            isIn: [['Ejercicio', 'Alimentación', 'Cuidado Facial', 'Cuidado Capilar']]
        }
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
    }
}, {
    timestamps: false
})