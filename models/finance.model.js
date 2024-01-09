import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Finance = sequelize.define('finances', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    incomes: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isNumeric: {
                msg: 'Ingresa números por favor!'
            },
            min: {
                arg: [0],
                msg: 'Los ingresos solo pueden ser positivos!'
            }
        }
    },
    expenses_list: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {
            description: 'Sin descripción',
            expense_value: 0
        },
        validate: {
            isValidExpensesList(value) {
                if (value && typeof value === 'object') {
                    if (!value.hasOwnProperty('description') || !value.hasOwnProperty('expense_value')) {
                        throw new Error('La lista debe tener las propiedades description y expense_value!')
                    }
                    if (typeof value.description !== 'string' || typeof value.expense_value !== 'number') {
                        throw new Error('Las propiedades description y expense_value deben ser una cadena y un número respectivamente!')
                    }
                }
                else {
                    throw new Error ('El campo debe ser un JSON válido!')
                }
            }
        }
    },
    expenses: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isNumeric: {
                msg: 'Ingresa números por favor!'
            },
            min: {
                arg: [0],
                msg: 'Los gastos solo pueden ser positivos!'
            }
        }
    },
    balance: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
    }
}, {
    timestamps: false
})