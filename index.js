import app from './app.js'
import { sequelize } from './database/database.js'
import { data } from './config.js'

import './models/user.model.js'
// import './models/calendar.model.js'
// import './models/careRoutine.model.js'
// import './models/careTip.model.js'
// import './models/category.model.js'
// import './models/finance.model.js'
// import './models/hobby.model.js'
// import './models/level.model.js'
// import './models/penance.model.js'
// import './models/rewardType.model.js'
// import './models/reward.model.js'
// import './models/savingPlan.model.js'
// import './models/task.model.js'
// import './models/wishList.model.js'

const port = data.port

const main = async () => {
    try {
        await sequelize.sync({force: true})
        app.listen(port)
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.log(`Unable to connect to the database: ${error}`)
    }
}

main()