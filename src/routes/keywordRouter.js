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

router.get('/subjects', (req, res) => {
  keywordController.getSubjects().then((response) => {
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

// Palavras-Chave - CRUD
router.get('/palavra-chave', (req, res) => {
  keywordController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

// Body com campo Keyword necessário
router.post('/palavra-chave', (req, res) => { // Falta tratamento dos dados
  keywordController.addKeyword(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

// Add Keyword into Subject
router.post('/subject/keyword', (req, res) => { // Falta tratamento dos dados
  keywordController.addKeywordSubject(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

// Atualização Keyword Subject
router.put('/switch/subject', (req, res) => {
  keywordController.updateSubjectKeyword(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

// Body necessita da keywordid (id palavra chave a ser mudada) e newKeyword (nova palavra a ser atualizada)
router.put('/palavra-chave/edit', (req, res) => {
  const { body, params } = req;
  keywordController.editKeyword(body).then((response) => {
    res.status(200).json(response.data);
  }).catch((e) => {
    res.status(400).json({ 'response': body, 'error': e });
  });
});

// Parâmetro vai na url devido a deleção ser via update
router.put('/palavra-chave/:keywordid/delete', (req, res) => {
  const { body, params } = req;
  keywordController.deleteKeyword(params).then((response) => {
    res.status(200).json(response.data);
  }).catch((e) => {
    res.status(400).json({ 'bruno': params, 'response': parseInt(params) });
  });
});

// Body com campo Keyword necessário
router.post('/palavra-chave', (req, res) => { // Falta tratamento dos dados
  keywordController.addKeyword(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

router.get('/palavra-chave2', (req, res) => {
  keywordController.getKeywordsAlternative().then((response) => {
    res.status(200).json(response.data);
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

module.exports = router;

