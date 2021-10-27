const jwt = require('jsonwebtoken');

function authenticate(auth, authorizedTypes) {
  let decodedUser;
  try {
    decodedUser = jwt.verify(auth, global.SECRET);
  } catch (e) {
    return false;
  }

  if (authorizedTypes.includes(decodedUser.userType)) {
    return true;
  }
  return false;
}

module.exports = {
  authenticateProfessor: (req, res, next) => {
    if (authenticate(req.headers.auth, ['Professor'])) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
    return;
  },
  authenticateAny: (req, res, next) => {
    if (authenticate(req.headers.auth, ['Professor', 'Aluno', 'Agente Externo'])) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
    return;
  },
};
