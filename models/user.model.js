import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Calendar } from './calendar.model.js'
import { Task } from './task.model.js'
import { Hobby } from './hobby.model.js'
import { Reward } from './reward.model.js'
import { Penance } from './penance.model.js'
import { CareRoutine } from './careRoutine.model.js'
import { Finance } from './finance.model.js'
import { SavingPlan } from './savingPlan.model.js'
import { WishList } from './wishList.model.js'
export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'unique_nickname',
            msg: 'Ya existe un usuario registrado con este nombre de usuario.'
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'unique_email',
            msg: 'Ya existe un usuario registrado con este correo.'
        },
        validate: {
            isEmail: {
                msg: 'El formato de correo no es válido'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cellphone: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null,
        validate: {
            isNumeric: {
                args: [10],
                msg: 'El número que ingresaste no es válido'
            }
        }
    },
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'default.jpg'
    }
}, {
    timestamps: false
})

User.hasOne(Calendar, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
Calendar.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(Task, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
Task.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(Hobby, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
Hobby.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(Reward, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
Reward.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(Penance, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
Penance.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(CareRoutine, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
CareRoutine.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasOne(Finance, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
Finance.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(SavingPlan, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
SavingPlan.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})

User.hasMany(WishList, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
WishList.belongsTo(User, {
    foreignKey: 'user_id',
    target: 'id'
})