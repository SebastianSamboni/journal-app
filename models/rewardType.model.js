import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Reward } from './reward.model.js'

export const RewardType = sequelize.define('reward_types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

RewardType.hasMany(Reward, {
    foreignKey: 'reward_type_id',
    sourceKey: 'id'
})
Reward.belongsTo(RewardType, {
    foreignKey: 'reward_type_id',
    target: 'id'
})