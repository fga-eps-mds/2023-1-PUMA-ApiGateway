const express = require('express');
const partnerProjectController = require('../controller/partnerProjectController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/', (req, res) => {
  partnerProjectController.getProjects().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/', (req, res) => {
  partnerProjectController.createProject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

module.exports = router;
