require('dotenv').config();

module.exports = {
  configEnv: () => {
    if (process.env.ENVIRONMENT === 'dev') {
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.URL_PROJECT = `http://${process.env.IP_ADDRESS}:3000`;
      global.URL_ALOCATE = `http://${process.env.IP_ADDRESS}:3002`;
      global.URL_HOM = `http://${process.env.IP_ADDRESS}:8080`;
      global.SECRET = process.env.SECRET;
    } else if (process.env.ENVIRONMENT === 'test') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.URL_PROJECT = `http://${process.env.IP_ADDRESS}:3000`;
      global.URL_HOM = `http://${process.env.IP_ADDRESS}:8080`;
      global.SECRET = process.env.SECRET;
    } else if (process.env.ENVIRONMENT === 'hom') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_USER = `${process.env.URL_USER}`;
      global.URL_PROJECT = `${process.env.URL_PROJECT}`;
      global.URL_ALOCATE = `http://${process.env.URL_ALOCATE}:3002`;
      global.URL_HOM = `http://${process.env.IP_ADDRESS}:8080`;
      global.SECRET = process.env.SECRET;
    } else if (process.env.ENVIRONMENT === 'prod') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_HOM = `http://puma.hml.one`;
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.URL_PROJECT = `http://${process.env.IP_ADDRESS}:3000`;
      global.URL_ALOCATE = `http://${process.env.IP_ADDRESS}:3002`;
      global.SECRET = process.env.SECRET_PROD;
    }
  },
};