require('dotenv').config();

module.exports = {
    database: {
        dbHost: process.env.DATABASE_HOST,
        dbName: process.env.DATABASE_NAME,
        dbPort: process.env.DATABASE_PORT,
        dbUserName: process.env.DATABASE_USER_NAME,
        dbPassword: process.env.DATABASE_PASSWORD
    },
    weatherApiKey: process.env.WEATHER_API_KEY,
    port: process.env.PORT || 3001
}