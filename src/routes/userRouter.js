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

router.put('/password/:email', (req, res) => {
  userController.updatePassword({ ...req.body, ...req.params }).then((response) => {
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

module.exports = router;
