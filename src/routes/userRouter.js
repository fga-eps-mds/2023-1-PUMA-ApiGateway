const userController = require('../controller/userController');
const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {
  userController.registerUser(req.body).then(() => {
    res.status(200).json({ });
  }).catch(() => {
    res.status(400).json({ });
  });
});

router.post('/login', (req, res) => {
  userController.logUserIn(req.body).then((token) => {
    res.status(200).json({ auth: true, token });
  }).catch((error) => {
    res.status(400).json({ auth: false, token: null, error });
  });
});

router.get('/aluno/:matriculaId', (req, res) => {
  userController.getAluno(req.params.matriculaId).then((response) => {
    res.json(response);
  });
});

module.exports = router
