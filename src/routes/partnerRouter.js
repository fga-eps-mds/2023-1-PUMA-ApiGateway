const express = require('express');
const partnerController = require('../controller/partnerController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.post('/', (req, res) => {
  partnerController.addPartner(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/', (req, res) => {
  partnerController.getPartners().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/:partnerId', (req, res) => {
  partnerController.getPartner(parseInt(req.params.partnerId, 10)).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/:partnerId', (req, res) => {
  partnerController.updatePartner(parseInt(req.params.partnerId, 10), req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    console.log(error);
    res.status(400).json(error);
  });
});

router.delete('/:partnerId', (req, res) => {
  partnerController.deletePartner(req.params.partnerId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

module.exports = router;
