const jwt = require('jsonwebtoken');

module.exports = {
  authenticateProfessor: (req, res, next) => {
    if(this.authenticate(['Professor'], req.headers['auth'])) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }

  },
  authenticate: async (authorizedTypes, auth) => {
    for (type in authorizedTypes) {
      switch (type) {
        case 'Aluno':
          try {
            if (jwt.verify(auth, global.STUDENT_SECRET)) {
              return true;
            }
          } catch (e) {
          }
          break;
        case 'Professor':
          try {
            if (jwt.verify(auth, global.PROFESSOR_SECRET)) {
              return true;
            }
          } catch (e) {
          }
          break;
        case 'Agente Externo':
          try {
            if (jwt.verify(auth, global.AGENT_SECRET)) {
              return true;
            }
          } catch (e) {
          }
          break;
      }
    }
    return false;
  }
}