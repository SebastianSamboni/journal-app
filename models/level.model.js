import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { User } from './user.model.js'
import { Reward } from './reward.model.js'

export const Level = sequelize.define('levels', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    level_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    experience: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    timestamps: false
})

Level.hasMany(User, {
    foreignKey: 'level_id',
    sourceKey: 'id'
})
User.belongsTo(Level, {
    foreignKey: 'level_id',
    target: 'id'
})

Reward.hasOne(Level, {
    foreignKey: 'reward_id',
    sourceKey: 'id'
})
Level.belongsTo(Reward, {
    foreignKey: 'reward_id',
    target: 'id'
})