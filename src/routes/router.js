const express = require('express');
const user = require('./userRouter.js')

const router = express.Router();

router.get('/', (req,res) =>{
    res.json({
        Project: "Puma",
        Service: "API Gateway"
    })
})

router.post('/aluno', (req, res) =>{
    user.addAluno(req.body)
    .then((response) => {
        res.status(200).json({ response: response });
    })
    .catch((response) => {
        res.status(400).json({ error: 'error' });
    });
})

router.get('/aluno/:matriculaId', (req, res) =>{
    user.getAluno(req.params.matriculaId).then((response) => {
        res.json(aluno);
    });
})

module.exports = app => app.use('/', router);
