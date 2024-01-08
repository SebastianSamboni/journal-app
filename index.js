import app from './app.js'
import { sequelize } from './database/database.js'
import { data } from './config.js'

const port = data.port

const main = async () => {
    try {
        await sequelize.authenticate()
        app.listen(port)
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.log(`Unable to connect to the database: ${error}`)
    }
}

main()