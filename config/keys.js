require('dotenv').config()

module.export = {
    TEST_DB: process.env.TEST_DB,
    DATA_DB: process.env.DATA_DB,
    JWT_SECRET: process.env.JWT_SECRET
}