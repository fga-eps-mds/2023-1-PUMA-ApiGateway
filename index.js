const express = require('express');
const cors = require('cors');
const environment = require('./src/config/environment');

environment.configEnv();

const app = express();
const corsOptions = {
  origin: `${global.URL_FRONT}`,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./src/routes/router')(app);

app.listen(3004);

module.exports = app;
