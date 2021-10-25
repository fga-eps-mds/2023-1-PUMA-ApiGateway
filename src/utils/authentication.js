const jwt = require('jsonwebtoken');

function authenticate(auth, authorizedTypes) {
  let decodedUser;
  try {
    decodedUser = jwt.verify(auth, global.SECRET);
    console.log('fewfw ')
    console.log(decodedUser)
  } catch (e) {
    return false;
  }
  console.log(authorizedTypes.includes(decodedUser.userType))
  
  if (authorizedTypes.includes(decodedUser.userType)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  authenticateProfessor: (req, res, next) => {
    if (authenticate(req.headers['auth'], ['Professor'])) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }

  },
  authenticateAny: (req, res, next) => {
    if (authenticate(req.headers['auth'], ['Professor', 'Aluno', 'Agente Externo'])) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }

  }
}