const jwt = require('jsonwebtoken');

function authenticate(auth, authorizedTypes) {
  let decodedUser;
  try {
    decodedUser = jwt.verify(auth, global.SECRET);
    if(authorizedTypes.includes(decodedUser.permission.typeName)) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
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
    if (authenticate(req.headers.auth, ['Professor', 'Aluno', 'Pessoa Fisica', 'Pessoa Juridica'])) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
    return;
  },
  getUserId: (auth) => {
    return jwt.verify(auth, global.SECRET).userId;
  },
};
