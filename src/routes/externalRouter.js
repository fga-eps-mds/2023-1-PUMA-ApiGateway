const express = require('express');
const externalController = require('../controller/externalController');

const router = express.Router();

router.get('/', (req, res) => {
  externalController.getExternal().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

module.exports = router;