const express = require('express');
const router = express.Router();

const knowledgeAreaController = require('../controller/knowledgeAreaController');

router.get('/', (req, res) => {
  knowledgeAreaController.getKnowledgeAreas().then((response) => {
    res.status(200).json(response.data);
  }).catch(() => {
    res.status(400).json({});
  });
});

module.exports = router;