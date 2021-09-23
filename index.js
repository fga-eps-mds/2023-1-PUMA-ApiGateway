const express = require('express');
const cors = require('cors');
const environment = require('./src/config/environment');

var app = express()
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

environment.configUser();

require('./src/routes/router')(app);

app.listen(3004)

module.exports = app;
