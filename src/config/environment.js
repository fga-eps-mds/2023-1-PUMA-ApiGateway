require('dotenv').config();
module.exports = {
    configUser: () => {
      if (process.env.ENVIRONMENT === 'dev') {
        global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
      }
    },
  };
  