const express = require('express');
const bannerController = require('../controller/bannerController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/', (req, res) => {
  bannerController.getAllBanners().then((response) => {
    res.status(200).json(response);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/', (req, res) => {
  bannerController.addBanner(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/:bannerId', (req, res) => {
  const bannerId = Number(req.params.bannerId);
  bannerController.getBanner(bannerId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/:bannerId', (req, res) => {
  const bannerId = req.params.bannerId;
  bannerController.updateBanner(bannerId, req.body)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});


router.delete('/:bannerId', (req, res) => {
  bannerController.deleteBanner(req.params.bannerId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = router;