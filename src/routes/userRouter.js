const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/register', (req, res) => {
  userController.registerUser(req.body).then(() => {
    res.status(200).json({ });
  }).catch(() => {
    res.status(400).json({ });
  });
});

router.post('/login', (req, res) => {
  userController.logUserIn(req.body).then((user) => {
    res.status(200).json({ auth: true, token: user.token, type: user.type });
  }).catch((error) => {
    res.status(400).json({ auth: false, token: null, error });
  });
});

router.get('/aluno/:matriculaId', (req, res) => {
  userController.getAluno(req.params.matriculaId).then((response) => {
    res.json(response);
  });
});

router.get('/initial', (req, res) => {
  userController.initial().then((response) => {
    res.status(200).json(response);
  });
});

module.exports = router;
