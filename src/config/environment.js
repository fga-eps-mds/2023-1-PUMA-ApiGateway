require('dotenv').config();

module.exports = {
  configEnv: () => {
    if (process.env.ENVIRONMENT === 'dev') {
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.URL_PROJECT = `http://${process.env.IP_ADDRESS}:3000`
      global.STUDENT_SECRET = process.env.STUDENT_SECRET;
      global.PROFESSOR_SECRET = process.env.PROFESSOR_SECRET;
      global.AGENT_SECRET = process.env.AGENT_SECRET;
    } else if (process.env.ENVIRONMENT === 'test') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.URL_HOM = `http://${process.env.IP_ADDRESS}:8080`;
      global.SECRET = process.env.SECRET;
    } else if (process.env.ENVIRONMENT === 'prod') {
      global.URL_GATEWAY = `http://${process.env.IP_ADDRESS}:3004`;
      global.URL_HOM = `http://puma.hml.one`
      global.URL_USER = `http://${process.env.IP_ADDRESS}:3001`;
      global.SECRET = process.env.SECRET_PROD;
    }
  },
};
