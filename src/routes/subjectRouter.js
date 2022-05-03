const express = require('express');
const subjectController = require('../controller/subjectController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/', (req, res) => {
    subjectController.getSubjects().then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.post('/', (req, res) => {
    subjectController.addSubject(req.body).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.get('/keywords', (req, res) => {
    subjectController.getAvailableKeywordsToSubject().then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.get('/subareas', (req, res) => {
    subjectController.getSubareas().then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.get('/knowledgeareas', (req, res) => {
    subjectController.getKnowledgeAreas().then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.get('/professors', (req, res) => {
    subjectController.getProfessors().then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.get('/:subjectid', (req, res) => {
    subjectController.getSubject(parseInt(req.params.subjectid, 10)).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.put('/:subjectid', (req, res) => {
    subjectController.updateSubject(parseInt(req.params.subjectid, 10), req.body).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.delete('/:subjectId', (req, res) => {
    subjectController.deleteSubject(req.params.subjectId).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

module.exports = router;