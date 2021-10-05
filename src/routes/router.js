const express = require('express');
const user = require('./userRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    Project: 'Puma',
    Service: 'API Gateway',
  });
});

router.post('/aluno', (req, res) => {
  user
    .addAluno(req.body)
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.get('/aluno/:matriculaId', (req, res) => {
  user.getAluno(req.params.matriculaId).then((response) => {
    res.json(response);
  });
});

module.exports = (app) => app.use('/', router);
