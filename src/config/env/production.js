const dotenv = require('dotenv');

dotenv.config();
 const production={
    DATABASE_URL: process.env.PROD_database_URL,
    APP_PORT:process.env.port
 }
 module.exports= production;