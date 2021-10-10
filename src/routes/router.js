const express = require('express');
const userRouter = require('./userRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    Project: 'Puma',
    Service: 'API Gateway',
  });
});

router.post('/register', (req, res) => {
  userRouter.registerUser(req.body).then(() => {
    console.log('res 200');
    res.status(200).json({ });
  }).catch(() => {
    console.log('res 400');
    res.status(400).json({ });
  });
});

router.post('/login', (req, res) => {
  userRouter.logUserIn(req.body).then((token) => {
    res.status(200).json({ auth: true, token });
  }).catch((error) => {
    res.status(400).json({ auth: false, token: null, error });
  });
});

router.get('/aluno/:matriculaId', (req, res) => {
  userRouter.getAluno(req.params.matriculaId).then((response) => {
    res.json(response);
  });
});

module.exports = (app) => app.use('/', router);
