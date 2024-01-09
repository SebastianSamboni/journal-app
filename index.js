import app from './app.js'
import { sequelize } from './database/database.js'
import { data } from './config.js'

import './models/user.model.js'
import './models/calendar.model.js'

const port = data.port

const main = async () => {
    try {
        await sequelize.sync({force: false})
        app.listen(port)
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.log(`Unable to connect to the database: ${error}`)
    }
}

main()