const express = require('express');
const user = require('./userRouter.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        Project: "Puma",
        Service: "API Gateway"
    })
})

router.post('/register', (req, res) => { 
    user.registerUser(req.body).then((response) => {
        console.log('res 200');
        res.status(200).json({  });
    }).catch((error) => {
        console.log('res 400');
        res.status(400).json({  });
    });
})

router.post('/login', (req, res) => {
    user.logUserIn(req.body).then((token) => {
        res.status(200).json({ auth: true, token });
    }).catch((error) => {
        res.status(400).json({ auth: false, token: null, error });
    });
})

router.get('/aluno/:matriculaId', (req, res) => {
    user.getAluno(req.params.matriculaId).then((response) => {
        res.json(aluno);
    });
})

module.exports = app => app.use('/', router);
