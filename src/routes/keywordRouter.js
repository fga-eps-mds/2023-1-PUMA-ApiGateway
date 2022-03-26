const express = require('express');
const router = express.Router();

const keywordController = require('../controller/keywordController');

router.get('/', (req, res) => {
  console.log('entrei');
  keywordController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch(() => {
    res.status(400).json({});
  });
});

module.exports = router;
