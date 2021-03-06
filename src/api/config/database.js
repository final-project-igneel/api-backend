require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_DEV,
        host: process.env.DB_HOST_DEV,
        dialect: "mysql",
        operatorsAliases: false
    },
    production: {
        username: process.env.DB_USERNAME_PROD,
        password: process.env.DB_PASSWORD_PROD,
        database: process.env.DB_PROD,
        host: process.env.DB_HOST_PROD,
        dialect: "mysql",
        operatorsAliases: false
    }
};
