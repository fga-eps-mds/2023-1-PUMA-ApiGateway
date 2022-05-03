const express = require('express');
const keywordController = require('../controller/keywordController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/', (req, res) => {
  keywordController.getKeywordsAlternative().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/', (req, res) => {
  keywordController.addKeyword(req.body).then((response) => {
    res.status(200).json(response);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/', (req, res) => {
  keywordController.editKeyword(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/subject', (req, res) => {
  keywordController.addKeywordSubject(req.body).then((response) => {
    res.status(200).json(response);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/subject', (req, res) => {
  keywordController.updateSubjectKeyword(req.body).then((response) => {
    res.status(200).json(response);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.delete('/:keywordid', (req, res) => {
  keywordController.deleteKeyword(req.params.keywordid).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

module.exports = router;

