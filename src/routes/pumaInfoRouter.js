const express = require('express');
const pumaInfoController = require('../controller/PumaInfoController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/', authentication.authenticateAny, (req, res) => {
  pumaInfoController.getPumaInfo().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/', authentication.authenticateAny, (req, res) => {
  pumaInfoController.updatePumaInfo(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

module.exports = router;
