const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/register', (req, res) => {
  userController.registerUser(req.body).then(() => {
    res.status(200).json({});
  }).catch(() => {
    res.status(400).json({});
  });
});

router.post('/login', (req, res) => {
  userController.logUserIn(req.body).then((userData) => {
    res.status(200).json({ auth: true, ...userData });
  }).catch((error) => {
    res.status(400).json({ auth: false, token: null, error });
  });
});

router.get('/aluno/:matriculaId', (req, res) => {
  userController.getStudent(req.params.matriculaId).then((response) => {
    res.status(200).json(response);
  });
});

router.get('/initial', (req, res) => {
  userController.initial().then((response) => {
    res.status(200).json(response);
  });
});

router.put('/password/:token', (req, res) => {
  const { body, params } = req;
  const { token } = params;

  userController.updatePassword({ ...body, token }).then((response) => {
    res.status(200).json(response);
  }).catch(() => {
    res.status(400).json({ });
  });
});

router.post('/recover', (req, res) => {
  userController.recoverPassword(req.body).then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.error });
    } else {
      res.status(200).json(response);
    }
  }).catch((err) => {
    res.status(400).json({ err });
  });
});

router.post('/userType', (req, res) => {
  userController.addUserType(req.body).then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.error });
    } else {
      res.status(200).json(response);
    }
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

router.get('/userType', (req, res) => {
  userController.getUserType().then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.error });
    } else {
      res.status(200).json(response);
    }
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.get('/userType/:UserTypeid', (req, res) => {
  userController.getUserType(req.params.UserTypeid).then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.error });
    } else {
      res.status(200).json(response);
    }
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.put('/userType/:UserTypeid', (req, res) => {
  userController.updateUserType(req.params.UserTypeid, req.body).then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.error });
    } else {
      res.status(200).json(response);
    }
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.delete('/userType/:UserTypeid', (req, res) => {
  userController.deleteUserType(req.params.UserTypeid).then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.error });
    } else {
      res.status(200).json(response);
    }
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/teacher/pending', (_, res) => {
  userController.getPendingApprovalTeacher().then((response) => {
      res.status(200).json(response);
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.patch('/teacher/pending/:userId', (req, res) => {
  userController.updateStatusTeacher(req.params.userId, req.body).then((response) => {
    if (response.status === 404) {
      res.status(404).json({ message: response.message });
    } else {
      res.status(200).json(response);
    }
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.get('/all', (_, res) => {
  userController.getAllUsers().then((response) => {
      res.status(200).json(response);
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.put('/revoke/:userId', (req, res) => {
  userController.revokeUserPermissions(req.params.userId).then((response) => {
    res.status(200).json(response);
  }).catch((response) => {
    res.status(400).json(response);
  });
});

router.put('/userTypes/change', (req, res) => {
  userController.changeUserTypes(req.body).then((response) => {
    res.status(200).json(response);
  }).catch((response) => {
    res.status(400).json(response);
  });
});

module.exports = router;
