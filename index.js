// Imports database config
require('./src/config/database.config')

const express = require('express');
const ap1Version1 = require('./src/config/versioning/v1')
const envConfig = require('./src/config/env/index')
const { notFound, appErrorHandler, genericErrorHandler } =require('./src/middlewares/error.middleware')

const app = express();

app.use(express.json())

const PORT = envConfig.APP_PORT || 7169;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
})

app.use('/api/v1', ap1Version1);
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound)

module.exports = app;
