module.exports = {
    configUser: () => {
      if (process.env.ENVIRONMENT === 'dev') {
        global.URL_SPORT = `http://${process.env.IP_ADDRESS}:3001`;
      }
    },
  };
  