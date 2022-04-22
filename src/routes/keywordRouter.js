const express = require('express');
const keywordController = require('../controller/keywordController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/keywords', (req, res) => {
  keywordController.getKeywordsAvailbleToProject().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/palavra-chave', (req, res) => {
  keywordController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/subject', authentication.authenticateAny, (req, res) => {
  keywordController.getAllSubjects(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/subject/keywords', (req, res) => {
  keywordController.getAvailableKeywordsToSubject().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/subject/keywords', (req, res) => {
  keywordController.getAvailableKeywordsToSubject().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = router;

