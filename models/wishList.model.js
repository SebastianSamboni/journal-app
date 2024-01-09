import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const WishList = sequelize.define('wish_lists', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Sin categoría'
    },
    product_list: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {
    timestamps: false
})