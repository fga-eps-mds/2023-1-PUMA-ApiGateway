require('dotenv').config();

module.exports = {
  configEnv: () => {
    if (process.env.ENVIRONMENT === 'dev') {
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.SECRET = process.env.SECRET;
    } else if (process.env.ENVIRONMENT === 'test') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.SECRET = process.env.SECRET;
    } else if (process.env.ENVIRONMENT === 'prod') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_HOM = `http://puma.hml.one`
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.SECRET = process.env.SECRET_PROD;
    }
  },
};
