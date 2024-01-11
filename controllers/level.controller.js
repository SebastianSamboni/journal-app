import { Level } from '../models/level.model.js'

export const createLevels = async (req, res) => {
    let experience = 0
    for (let i = 0; i <= 50; i++) {
        if (i === 0) {
            experience += 25
        }
        else if (i >= 1 && i <= 25) {
            experience += i * 50
        }
        else if (i > 25 && i <= 50) {
            experience += i * 50 + 10
        }
        const newLevel = Level.create({
            level_number: i,
            experience
        })
    }
}